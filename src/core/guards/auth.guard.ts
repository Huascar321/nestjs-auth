import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException
} from '@nestjs/common';
import { Request } from 'express';
import { JwtService } from '@nestjs/jwt';
import { jwtConstant } from '../../shared/constants/jwt.constant';
import { Reflector } from '@nestjs/core';
import { IS_PUBLIC_KEY } from '../decorators/public.decorator';
import { AuthService } from '../../modules/auth/auth.service';
import { Jwt } from '../../shared/models/auth/jwt.model';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private jwtService: JwtService,
    private reflector: Reflector,
    private authService: AuthService
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    if (this.isPublic(context)) return true;
    const request = context.switchToHttp().getRequest();
    const accessToken = this.extractAccessTokenFromHeader(request);
    const refreshToken = this.extractRefreshTokenFromCookie(request);
    if (!accessToken || !refreshToken) throw new UnauthorizedException();

    try {
      request['user'] = await this.jwtService.verifyAsync(accessToken, {
        secret: jwtConstant.secret
      });
      return true;
    } catch (error) {
      if (error.name === 'TokenExpiredError') {
        console.log('refreshTokenActivate');
        const refreshTokenPayload = await this.jwtService.verifyAsync(
          refreshToken
        );
        if (!refreshTokenPayload) throw new UnauthorizedException();
        const newAccessToken = await lastValueFrom(
          this.authService.refresh(refreshToken)
        );
        this.setNewTokensToResponse(context, newAccessToken);
        request['user'] = await this.jwtService.verifyAsync(
          newAccessToken.access_token,
          { secret: jwtConstant.secret }
        );
        return true;
      } else {
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

  private extractAccessTokenFromHeader(request: Request): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }

  private extractRefreshTokenFromCookie(request: Request): string | undefined {
    return request.cookies['RefreshToken'];
  }

  private setNewTokensToResponse(
    context: ExecutionContext,
    tokens: Omit<Jwt, 'refresh_token'>
  ) {
    const response = context.switchToHttp().getResponse();
    response.setHeader('Authorization', `Bearer ${tokens.access_token}`);
  }
}
