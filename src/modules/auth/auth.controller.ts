import {
  BadRequestException,
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Req,
  Res,
  UsePipes
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { JoiValidatorPipe } from '../../core/pipes/validators/joi-validator.pipe';
import { Public } from '../../core/decorators/public.decorator';
import { UserCreateSchema } from '../../../prisma/generated/schemas';
import { CreateUserDto } from '../../shared/models/user';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Request, Response } from 'express';
import { Jwt } from '../../shared/models/auth/jwt.model';
import { User } from '@prisma/client';
import { UserProfile } from '../../shared/models/user/entities/user-profile.entity';
import { extractRefreshTokenFromCookie } from '../../core/helper/extractor.helper';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Public()
  @Post('login')
  @UsePipes(new JoiValidatorPipe(UserCreateSchema))
  signIn(
    @Body() signInDto: CreateUserDto,
    @Res({ passthrough: true }) res: Response
  ): Observable<Omit<Jwt, 'refresh_token'>> {
    return this.authService.signIn(signInDto.username, signInDto.password, res);
  }

  @HttpCode(HttpStatus.OK)
  @Get('logout')
  signOut(@Res({ passthrough: true }) res: Response): Observable<null> {
    return this.authService.signOut(res);
  }

  @HttpCode(HttpStatus.OK)
  @Public()
  @Post('register')
  @UsePipes(new JoiValidatorPipe(UserCreateSchema))
  signUp(@Body() signUpDto: CreateUserDto): Observable<Omit<User, 'password'>> {
    return this.authService.signUp(signUpDto.username, signUpDto.password);
  }

  @HttpCode(HttpStatus.OK)
  @Get('refresh')
  refresh(@Req() req: Request): Observable<Omit<Jwt, 'refresh_token'>> {
    const refreshToken = extractRefreshTokenFromCookie(req);
    if (refreshToken) return this.authService.refresh(refreshToken);
    throw new BadRequestException(`There's no refresh token in cookies`);
  }

  @Get('profile')
  @ApiOkResponse({ type: UserProfile })
  getProfile(@Req() req: Request): UserProfile {
    return (req as any).user;
  }
}
