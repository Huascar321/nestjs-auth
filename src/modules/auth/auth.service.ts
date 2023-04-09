import { BadRequestException, Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { Observable, of, switchMap } from 'rxjs';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { User } from '@prisma/client';
import { fromPromise } from 'rxjs/internal/observable/innerFrom';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService
  ) {}

  signIn(username: string, pass: string): Observable<{ access_token: string }> {
    return this.userService.findOne({ username }).pipe(
      switchMap((foundUser) => {
        if (!foundUser) throw new BadRequestException('User not found');
        return fromPromise(bcrypt.compare(pass, foundUser.password)).pipe(
          switchMap((isMatch) => {
            if (!isMatch) throw new BadRequestException('Incorrect password');
            const payload = { username };
            return fromPromise(this.jwtService.signAsync(payload)).pipe(
              switchMap((access_token) => of({ access_token }))
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
}
