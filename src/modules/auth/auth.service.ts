import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { map, Observable } from 'rxjs';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService
  ) {}

  signIn(username: string, pass: string): Observable<any> {
    return this.userService.findOne(username).pipe(
      map(async (user) => {
        if (user?.password !== pass) throw new UnauthorizedException();
        const payload = { username: user.username, sub: user.userId };
        return {
          access_token: await this.jwtService.signAsync(payload)
        };
      })
    );
  }
}
