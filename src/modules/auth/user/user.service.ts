import { Injectable } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { Observable } from 'rxjs';
import { fromPromise } from 'rxjs/internal/observable/innerFrom';
import { PrismaService } from '../../../core/services/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private db: PrismaService) {}

  findAllUsers(): Observable<Omit<User, 'password'>[]> {
    return fromPromise(
      this.db.user.findMany({
        select: {
          id: true,
          username: true,
          password: false
        }
      })
    ) as Observable<Omit<User, 'password'>[]>;
  }

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
