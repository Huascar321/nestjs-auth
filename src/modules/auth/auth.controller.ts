import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Request,
  UsePipes
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { JoiValidatorPipe } from '../../core/pipes/validators/joi-validator.pipe';
import { Public } from '../../core/decorators/public.decorator';
import { UserCreateSchema } from '../../../prisma/generated/schemas';
import { CreateUserDto } from '../../shared/models/user';
import { User } from '@prisma/client';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Public()
  @Post('login')
  @UsePipes(new JoiValidatorPipe(UserCreateSchema))
  signIn(
    @Body() signInDto: CreateUserDto
  ): Observable<{ access_token: string }> {
    return this.authService.signIn(signInDto.username, signInDto.password);
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
