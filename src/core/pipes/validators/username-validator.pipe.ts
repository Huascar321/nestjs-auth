import {
  BadRequestException,
  forwardRef,
  Inject,
  Injectable,
  PipeTransform
} from '@nestjs/common';
import { UserService } from '../../../modules/auth/user/user.service';
import { from, map, Observable } from 'rxjs';
import { Prisma } from '@prisma/client';

@Injectable()
export class UsernameValidatorPipe implements PipeTransform {
  constructor(
    @Inject(forwardRef(() => UserService)) private userService: UserService
  ) {}

  transform(value: Prisma.UserCreateInput): Observable<Prisma.UserCreateInput> {
    return from(
      this.userService.findOne({
        username: value.username
      })
    ).pipe(
      map((foundUser) => {
        if (!!foundUser) return value;
        throw new BadRequestException('User not found');
      })
    );
  }
}
