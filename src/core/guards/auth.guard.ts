import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException
} from '@nestjs/common';
import { Response } from 'express';
import { JwtService } from '@nestjs/jwt';
import { jwtConstant } from '../../shared/constants/jwt.constant';
import { Reflector } from '@nestjs/core';
import { IS_PUBLIC_KEY } from '../decorators/public.decorator';
import { AuthService } from '../../modules/auth/auth.service';
import { Jwt } from '../../shared/models/auth/jwt.model';
import { lastValueFrom } from 'rxjs';
import { CustomLoggerService } from '../services/custom-logger/custom-logger.service';
import {
  extractAccessTokenFromHeader,
  extractRefreshTokenFromCookie
} from '../helper/extractor.helper';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private devLogger: CustomLoggerService,
    private jwtService: JwtService,
    private reflector: Reflector
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    if (this.isPublic(context)) return true;
    const response = context.switchToHttp().getResponse();
    const request = context.switchToHttp().getRequest();
    const accessToken = extractAccessTokenFromHeader(request);
    const refreshToken = extractRefreshTokenFromCookie(request);
    if (!refreshToken) {
      this.devLogger.log(`Invalid or expired Refresh Token`);
      throw new UnauthorizedException();
    }

    try {
      request['user'] = await this.jwtService.verifyAsync(accessToken!, {
        secret: jwtConstant.secret
      });
      response.set('Cache-Control', 'no-store');
      return true;
    } catch (error) {
      if (
        error.name === 'TokenExpiredError' ||
        error.name === 'JsonWebTokenError'
      ) {
        this.devLogger.log(
          `Access Token is expired or doesn't exist, using Refresh Token instead`
        );
        const refreshTokenPayload = await this.jwtService.verifyAsync(
          refreshToken
        );
        if (!refreshTokenPayload) {
          this.devLogger.log(`Invalid or expired Refresh Token`);
          throw new UnauthorizedException();
        }
        const newAccessToken = await lastValueFrom(
          this.authService.refresh(refreshToken)
        );
        this.setNewTokensToResponse(response, newAccessToken);
        request['user'] = await this.jwtService.verifyAsync(
          newAccessToken.access_token,
          { secret: jwtConstant.secret }
        );
        return true;
      } else {
        this.devLogger.log(`Unexpected token error`);
        throw new UnauthorizedException();
      }
    }
  }

  private isPublic(context: ExecutionContext): boolean {
    return this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass()
    ]);
  }

  private setNewTokensToResponse(
    response: Response,
    tokenInfo: Omit<Jwt, 'refresh_token'>
  ) {
    response.setHeader('New-Token', JSON.stringify(tokenInfo));
    response.set('Cache-Control', 'no-store');
    this.devLogger.log(
      'A new Access Token was generated and sent to the client'
    );
  }
}
