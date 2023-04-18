import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { PrismaService } from '../../../core/services/prisma/prisma.service';
import { filter, Observable, switchMap, take } from 'rxjs';
import { fromPromise } from 'rxjs/internal/observable/innerFrom';
import { Permission, RolePermission } from '@prisma/client';

@Injectable()
export class PermissionService {
  constructor(private db: PrismaService) {}

  findRolePermissions(
    roleId: number
  ): Observable<{ permission: { code: number } }[]> {
    return fromPromise(
      this.db.rolePermission.findMany({
        where: {
          roleId
        },
        select: {
          permission: {
            select: {
              code: true
            }
          }
        }
      })
    );
  }

  findFirst(
    roleId: number,
    permissionId: number
  ): Observable<RolePermission | null> {
    return fromPromise(
      this.db.rolePermission.findFirst({
        where: { roleId, permissionId }
      })
    );
  }

  findPermissionByCode(code: number): Observable<Permission | null> {
    return fromPromise(
      this.db.permission.findUnique({
        where: {
          code
        }
      })
    );
  }

  getRolePermissions(
    roleId: number
  ): Observable<(RolePermission & { permission: Permission })[]> {
    return fromPromise(
      this.db.rolePermission.findMany({
        where: {
          roleId
        },
        include: {
          permission: true
        }
      })
    );
  }

  addPermissionToRole(
    roleId: number,
    permissionCode: number
  ): Observable<RolePermission | null> {
    return this.findPermissionByCode(permissionCode).pipe(
      switchMap((permission) => {
        if (!permission)
          throw new InternalServerErrorException('Unknown permission code');
        return this.findFirst(roleId, permission.id).pipe(
          switchMap((isDuplicated) => {
            if (!!isDuplicated)
              throw new InternalServerErrorException(
                'This permission was already added to the role'
              );
            return this.db.rolePermission.create({
              data: {
                roleId,
                permissionId: permission.id
              }
            });
          })
        );
      })
    );
  }

  removePermissionFromRole(roleId: number, permissionCode: number): void {
    const permission$ = this.findPermissionByCode(permissionCode);
    const found$ = permission$.pipe(
      filter((permission) => !!permission),
      switchMap((permission) => {
        if (!permission)
          throw new InternalServerErrorException('Unknown permission code');
        return this.findFirst(roleId, permission.id);
      }),
      filter((found) => !!found),
      take(1)
    );

    found$.subscribe({
      next: (found) => {
        if (!found)
          throw new InternalServerErrorException(
            'This permission was already removed from the role'
          );
        this.db.rolePermission.delete({ where: { id: found?.id } });
      },
      error: (error) => {
        throw new InternalServerErrorException(error.message);
      }
    });
  }
}
