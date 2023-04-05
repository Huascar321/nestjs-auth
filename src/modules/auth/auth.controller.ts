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
import { signInDto, signInSchema } from '../../core/models/auth/auth.dto';
import { JoiValidatorPipe } from '../../core/pipes/validators/joi-validator.pipe';
import { Public } from '../../core/decorators/public.decorator';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Public()
  @Post('login')
  @UsePipes(new JoiValidatorPipe(signInSchema))
  signIn(@Body() signInDto: signInDto): Observable<any> {
    return this.authService.signIn(signInDto.username, signInDto.password);
  }

  @Get('profile')
  getProfile(@Request() req: unknown): unknown {
    return (req as any).user;
  }
}
