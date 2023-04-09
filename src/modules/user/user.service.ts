import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Prisma, User } from '@prisma/client';
import { fromPromise } from 'rxjs/internal/observable/innerFrom';
import { PrismaService } from '../../shared/services/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private db: PrismaService) {}

  findOne(
    whereUniqueInput: Prisma.UserWhereUniqueInput
  ): Observable<User | null> {
    return fromPromise(
      this.db.user.findUnique({
        where: whereUniqueInput
      })
    );
  }

  create(data: Prisma.UserCreateInput): Observable<Omit<User, 'password'>> {
    return fromPromise(
      this.db.user.create({
        data,
        select: {
          id: true,
          username: true
        }
      })
    );
  }
}
