import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UsePipes
} from '@nestjs/common';
import { RoleService } from './role.service';
import {
  RoleCreateSchema,
  RoleDeleteOneSchema,
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
import { RoleUniqueSchema } from '../../../shared/models/userRole/custom-schemas/role-unique/role-unique.schema';
import { UserRole as UserRoleClass } from '../../../shared/models/userRole';
import { Permission } from '../../../shared/models/permission';
import { PermissionService } from './permission/permission.service';
import { RolePermissionSchema } from '../../../shared/models/rolePermission/custom-schemas/role-permission/role-permission.schema';
import { RolePermission as RolePermissionClass } from '../../../shared/models/rolePermission';

@ApiTags('roles')
@Controller('roles')
export class RoleController {
  constructor(
    private roleService: RoleService,
    private permissionService: PermissionService
  ) {}

  @Post()
  @UsePipes(new JoiValidatorPipe(RoleCreateSchema))
  create(@Body() createRoleDto: CreateRoleDto): Observable<Role> {
    return this.roleService.create(createRoleDto);
  }

  @Put(':id')
  @UsePipes(new JoiValidatorPipe(RoleUpdateOneSchema))
  @ApiOkResponse({ type: [RoleClass] })
  update(
    @Body() data: UpdateRoleDto,
    @Param(
      'id',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })
    )
    id: number
  ): Observable<Role> {
    return this.roleService.update(id, data);
  }

  @Delete('id')
  @UsePipes(new JoiValidatorPipe(RoleDeleteOneSchema))
  @ApiOkResponse({ type: [RoleClass] })
  delete(
    @Param(
      'id',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })
    )
    id: number
  ): Observable<Role> {
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
  @UsePipes(new JoiValidatorPipe(RoleUniqueSchema))
  @ApiOkResponse({ type: UserRoleClass })
  addRoleToUser(
    @Body() roleUnique: number | string,
    @Param(
      'id',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })
    )
    userId: number
  ): Observable<UserRole> {
    return this.roleService.addRoleToUser(roleUnique, userId);
  }

  @Delete(':id/users/remove')
  @UsePipes(new JoiValidatorPipe(RoleUniqueSchema))
  @HttpCode(HttpStatus.OK)
  removeRoleFromUser(
    @Body() roleUnique: number | string,
    @Param(
      'id',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })
    )
    userId: number
  ): Observable<UserRole> {
    return this.roleService.removeRoleFromUser(roleUnique, userId);
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
  @UsePipes(new JoiValidatorPipe(RolePermissionSchema))
  @ApiOkResponse({ type: RolePermissionClass })
  addPermissionToRole(
    @Body() permissionCode: number,
    @Param(
      'id',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })
    )
    roleId: number
  ): Observable<RolePermission> {
    return this.permissionService.addPermissionToRole(roleId, permissionCode);
  }

  @Delete(':id/permission/remove')
  @UsePipes(new JoiValidatorPipe(RolePermissionSchema))
  @HttpCode(HttpStatus.OK)
  removePermissionFromRole(
    @Body() permissionCode: number,
    @Param(
      'id',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })
    )
    roleId: number
  ): void {
    // should test because this method doesn't return anything
    this.permissionService.removePermissionFromRole(roleId, permissionCode);
  }
}
