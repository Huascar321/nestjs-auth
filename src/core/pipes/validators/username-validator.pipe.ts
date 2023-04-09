import {
  BadRequestException,
  forwardRef,
  Inject,
  Injectable,
  PipeTransform
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { UserService } from '../../../modules/user/user.service';
import { from, map, Observable } from 'rxjs';

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
