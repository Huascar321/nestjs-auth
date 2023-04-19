import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from '../../../core/services/prisma/prisma.service';
import { CreateRoleDto, UpdateRoleDto } from '../../../shared/models/role';
import { Observable, of, switchMap } from 'rxjs';
import { Role, UserRole } from '@prisma/client';
import { fromPromise } from 'rxjs/internal/observable/innerFrom';
import { RoleUsersReturn } from '../../../shared/models/role/return-types/role-users.model';

@Injectable()
export class RoleService {
  constructor(private db: PrismaService) {}

  findByName(name: string): Observable<Role | null> {
    return fromPromise(
      this.db.role.findUnique({
        where: {
          name
        }
      })
    );
  }

  findById(id: number): Observable<Role | null> {
    return fromPromise(
      this.db.role.findUnique({
        where: {
          id
        }
      })
    );
  }

  getRoleUsers(roleId: number): Observable<RoleUsersReturn> {
    return fromPromise(
      this.db.userRole.findMany({
        where: {
          roleId
        },
        include: {
          user: {
            select: {
              id: true,
              username: true
            }
          }
        }
      })
    );
  }

  create(data: CreateRoleDto): Observable<Role> {
    return this.findByName(data.name).pipe(
      switchMap((isDuplicated) => {
        if (!isDuplicated)
          throw new BadRequestException('This name already belongs to a role');
        return fromPromise(
          this.db.role.create({
            data: {
              name: data.name,
              description: data.description
            }
          })
        );
      })
    );
  }

  update(id: number, data: UpdateRoleDto): Observable<Role> {
    return this.findById(id).pipe(
      switchMap((foundRole) => {
        if (!foundRole)
          throw new BadRequestException(`This role doesn't exist`);
        return fromPromise(
          this.db.role.update({
            where: {
              id
            },
            data
          })
        );
      })
    );
  }

  delete(id: number): Observable<Role> {
    return this.findById(id).pipe(
      switchMap((foundRole) => {
        if (!foundRole)
          throw new BadRequestException(`This role doesn't exist`);
        return fromPromise(
          this.db.role.delete({
            where: {
              id
            }
          })
        );
      })
    );
  }

  addRoleToUser(
    roleUnique: number | string,
    userId: number
  ): Observable<UserRole> {
    return this.isRoleAvailableByUnique(roleUnique).pipe(
      switchMap((foundRoleId) => {
        return this.hasUserThisRole(userId, foundRoleId).pipe(
          switchMap((foundUserRole) => {
            if (!!foundUserRole)
              throw new BadRequestException(
                'This role was already added to this user'
              );
            return fromPromise(
              this.db.userRole.create({
                data: {
                  userId,
                  roleId: foundRoleId
                }
              })
            );
          })
        );
      })
    );
  }

  removeRoleFromUser(
    roleUnique: number | string,
    userId: number
  ): Observable<UserRole> {
    return this.isRoleAvailableByUnique(roleUnique).pipe(
      switchMap((foundRoleId) => {
        return this.hasUserThisRole(userId, foundRoleId).pipe(
          switchMap((foundUserRole) => {
            if (!foundUserRole)
              throw new BadRequestException(`This role doesn't exist`);
            return fromPromise(
              this.db.userRole.delete({
                where: {
                  id: foundUserRole.id
                }
              })
            );
          })
        );
      })
    );
  }

  private hasUserThisRole(
    userId: number,
    roleId: number
  ): Observable<UserRole | null> {
    return fromPromise(
      this.db.userRole.findFirst({
        where: {
          userId,
          roleId
        }
      })
    );
  }

  private isRoleAvailableByUnique(unique: number | string): Observable<number> {
    if (typeof unique !== 'number') {
      this.findByName(unique).subscribe((found) => {
        if (!found) throw new BadRequestException(`This role doesn't exist`);
        return found.id;
      });
    }
    return of(Number(unique));
  }
}
