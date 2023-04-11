import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Request,
  Res,
  UsePipes
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { JoiValidatorPipe } from '../../core/pipes/validators/joi-validator.pipe';
import { Public } from '../../core/decorators/public.decorator';
import { UserCreateSchema } from '../../../prisma/generated/schemas';
import { CreateUserDto } from '../../shared/models/user';
import { User } from '@prisma/client';
import { ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { Jwt } from '../../shared/models/auth/jwt.model';

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
  @Public()
  @Post('register')
  @UsePipes(new JoiValidatorPipe(UserCreateSchema))
  signUp(@Body() signUpDto: CreateUserDto): Observable<Omit<User, 'password'>> {
    return this.authService.signUp(signUpDto.username, signUpDto.password);
  }

  @Get('profile')
  getProfile(@Request() req: unknown): unknown {
    return (req as any).user;
  }
}
