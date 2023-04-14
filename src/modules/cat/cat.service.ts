import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { PrismaService } from '../../shared/services/prisma/prisma.service';
import { fromPromise } from 'rxjs/internal/observable/innerFrom';
import { Cat, Prisma } from '@prisma/client';

@Injectable()
export class CatService {
  constructor(private db: PrismaService) {}

  findOne(
    whereUniqueInput: Prisma.UserWhereUniqueInput
  ): Observable<Cat | null> {
    return fromPromise(
      this.db.cat.findUnique({
        where: whereUniqueInput
      })
    );
  }

  findAll(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.CatWhereUniqueInput;
    where?: Prisma.CatWhereInput;
    orderBy?: Prisma.CatOrderByWithRelationInput;
  }): Observable<Cat[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return fromPromise(
      this.db.cat.findMany({
        skip,
        take,
        cursor,
        where,
        orderBy
      })
    );
  }

  create(data: Prisma.CatCreateInput): Observable<Cat> {
    return fromPromise(
      this.db.cat.create({
        data
      })
    );
  }

  update(params: {
    where: Prisma.CatWhereUniqueInput;
    data: Prisma.CatUpdateInput;
  }): Observable<Cat> {
    const { where, data } = params;
    return fromPromise(
      this.db.cat.update({
        data,
        where
      })
    );
  }

  delete(where: Prisma.CatWhereUniqueInput): Observable<Cat> {
    return fromPromise(
      this.db.cat.delete({
        where
      })
    );
  }
}
