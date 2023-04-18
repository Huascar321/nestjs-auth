import {
  BadRequestException,
  Injectable,
  InternalServerErrorException
} from '@nestjs/common';
import { UserService } from '../user/user.service';
import { forkJoin, map, Observable, switchMap } from 'rxjs';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { fromPromise } from 'rxjs/internal/observable/innerFrom';
import { Jwt } from '../../shared/models/auth/jwt.model';
import { v4 as uuid } from 'uuid';
import { ConfigService } from '@nestjs/config';
import { Response } from 'express';
import { User } from '@prisma/client';
import { parseTimeToSeconds } from '../../core/helper/parser.helper';
import { CustomLoggerService } from '../../core/services/custom-logger/custom-logger.service';

@Injectable()
export class AuthService {
  constructor(
    private configService: ConfigService,
    private devLogger: CustomLoggerService,
    private jwtService: JwtService,
    private userService: UserService
  ) {}

  signIn(
    username: string,
    pass: string,
    res: Response
  ): Observable<Omit<Jwt, 'refresh_token'>> {
    return this.userService.findOne({ username }).pipe(
      switchMap((foundUser) => {
        if (!foundUser) throw new BadRequestException('User not found');
        return fromPromise(bcrypt.compare(pass, foundUser.password)).pipe(
          switchMap((isMatch) => {
            if (!isMatch) throw new BadRequestException('Incorrect password');
            return this.generateTokens(username).pipe(
              map((tokens) => {
                this.setRefreshTokenCookie(res, tokens.refresh_token);
                delete (tokens as any).refresh_token;
                this.devLogger.log(
                  `User logged in successfully, access token was sent`
                );
                return tokens;
              })
            );
          })
        );
      })
    );
  }

  signUp(
    username: string,
    password: string
  ): Observable<Omit<User, 'password'>> {
    return fromPromise(bcrypt.hash(password, 10)).pipe(
      switchMap((hashedPassword) => {
        return this.userService.create({ username, password: hashedPassword });
      })
    );
  }

  refresh(refreshToken: string): Observable<Omit<Jwt, 'refresh_token'>> {
    return fromPromise(this.jwtService.verifyAsync(refreshToken)).pipe(
      switchMap((payload) => {
        return this.userService.findOne({ username: payload.username }).pipe(
          switchMap((foundUser) => {
            if (!foundUser) throw new BadRequestException('User not found');
            return fromPromise(
              this.jwtService.signAsync({ username: foundUser.username })
            ).pipe(
              map((accessToken) => ({
                access_token: accessToken
              }))
            );
          })
        );
      }),
      map((payload) => {
        return {
          access_token: payload.access_token,
          access_token_expires_in:
            this.configService.get<string>('accessTokenTime')!
        };
      })
    );
  }

  private generateTokens(username: string): Observable<Jwt> {
    return forkJoin([
      fromPromise(this.jwtService.signAsync({ username })),
      fromPromise(
        this.jwtService.signAsync(
          { username, tokenId: uuid() },
          {
            expiresIn: this.configService.get<string>('refreshTokenTime')
          }
        )
      )
    ]).pipe(
      map(([accessToken, refreshToken]) => ({
        access_token: accessToken,
        refresh_token: refreshToken,
        access_token_expires_in:
          this.configService.get<string>('accessTokenTime')!
      }))
    );
  }

  setRefreshTokenCookie(res: Response, refreshToken: string): void {
    const refreshTokenTime = this.configService.get<string>('refreshTokenTime');
    if (!refreshTokenTime) {
      throw new InternalServerErrorException('Refresh token time not defined');
    }
    res.cookie('RefreshToken', refreshToken, {
      httpOnly: true,
      maxAge: parseTimeToSeconds(refreshTokenTime) * 1000,
      sameSite: 'strict'
    });
    this.devLogger.log(`Refresh token was set in http only cookies`);
  }
}
