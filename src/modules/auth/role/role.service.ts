import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../core/services/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class RoleService {
  constructor(private db: PrismaService) {}

  create(data: Prisma.RoleCreateInput): void {
  }
}
