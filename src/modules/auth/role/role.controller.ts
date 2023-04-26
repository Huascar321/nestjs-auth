import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  NotAcceptableException,
  Param,
  ParseIntPipe,
  Post,
  Put
} from '@nestjs/common';
import { RoleService } from './role.service';
import {
  RoleCreateSchema,
  RoleUpdateOneSchema
} from '../../../../prisma/generated/schemas';
import { JoiValidatorPipe } from '../../../core/pipes/validators/joi-validator.pipe';
import {
  CreateRoleDto,
  Role as RoleClass,
  UpdateRoleDto
} from '../../../shared/models/role';
import { Observable } from 'rxjs';
import { Role, RolePermission, UserRole } from '@prisma/client';
import { RoleUsersReturn } from '../../../shared/models/role/return-types/role-users.model';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { User } from '../../../shared/models/user';
import {
  CreateUserRoleDto,
  UserRole as UserRoleClass
} from '../../../shared/models/userRole';
import {
  CreatePermissionDto,
  Permission
} from '../../../shared/models/permission';
import { PermissionService } from './permission/permission.service';
import { RolePermission as RolePermissionClass } from '../../../shared/models/rolePermission';

@ApiTags('roles')
@Controller('roles')
export class RoleController {
  constructor(
    private roleService: RoleService,
    private permissionService: PermissionService
  ) {}

  @Get()
  findAllRoles(): Observable<Role[]> {
    return this.roleService.findAllRoles();
  }

  @Post()
  create(
    @Body(new JoiValidatorPipe(RoleCreateSchema)) createRoleDto: CreateRoleDto
  ): Observable<Role> {
    return this.roleService.create(createRoleDto);
  }

  @Put(':id')
  @ApiOkResponse({ type: [RoleClass] })
  update(
    @Body(new JoiValidatorPipe(RoleUpdateOneSchema)) data: UpdateRoleDto,
    @Param(
      'id',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })
    )
    id: number
  ): Observable<Role> {
    return this.roleService.update(id, data);
  }

  @Delete(':id')
  @ApiOkResponse({ type: [RoleClass] })
  delete(
    @Param(
      'id',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })
    )
    id: number
  ): Observable<null> {
    return this.roleService.delete(id);
  }

  @Get(':id/users')
  @ApiOkResponse({ type: [User] })
  getRoleUsers(
    @Param(
      'id',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })
    )
    roleId: number
  ): Observable<RoleUsersReturn> {
    return this.roleService.getRoleUsers(roleId);
  }

  @Post(':id/users/add')
  @ApiOkResponse({ type: UserRoleClass })
  addRoleToUser(
    @Body('data') data: Pick<CreateUserRoleDto, 'userId'>,
    @Param(
      'id',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })
    )
    roleUnique: number
  ): Observable<UserRole> {
    if (data) {
      if (!data.userId)
        throw new NotAcceptableException(`userId not found in request body`);
      return this.roleService.addRoleToUser(roleUnique, data.userId);
    }
    throw new NotAcceptableException(`Request body not found`);
  }

  @Delete(':id/users/remove')
  @HttpCode(HttpStatus.OK)
  removeRoleFromUser(
    @Body('data') data: Pick<CreateUserRoleDto, 'userId'>,
    @Param(
      'id',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })
    )
    roleUnique: number
  ): Observable<null> {
    if (data) {
      if (!data.userId)
        throw new NotAcceptableException(`userId not found in request body`);
      return this.roleService.removeRoleFromUser(roleUnique, data.userId);
    }
    throw new NotAcceptableException(`Request body not found`);
  }

  @Get(':id/permissions')
  @ApiOkResponse({ type: [Permission] })
  getRolePermissions(
    @Param(
      'id',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })
    )
    roleId: number
  ): Observable<(RolePermission & { permission: Permission })[]> {
    return this.permissionService.getRolePermissions(roleId);
  }

  @Post(':id/permissions/add')
  @ApiOkResponse({ type: RolePermissionClass })
  addPermissionToRole(
    @Body('data') data: Pick<CreatePermissionDto, 'code'>,
    @Param(
      'id',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })
    )
    roleId: number
  ): Observable<RolePermission> {
    if (data) {
      if (!data.code)
        throw new NotAcceptableException(
          `Permission code not found in request body`
        );
      return this.permissionService.addPermissionToRole(roleId, data.code);
    }
    throw new NotAcceptableException(`Request body not found`);
  }

  @Delete(':id/permissions/remove')
  @HttpCode(HttpStatus.OK)
  removePermissionFromRole(
    @Body('data') data: Pick<CreatePermissionDto, 'code'>,
    @Param(
      'id',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })
    )
    roleId: number
  ): Observable<null> {
    if (data) {
      if (!data.code)
        throw new NotAcceptableException(
          `Permission code not found in request body`
        );
      return this.permissionService.removePermissionFromRole(roleId, data.code);
    }
    throw new NotAcceptableException(`Request body not found`);
  }
}
