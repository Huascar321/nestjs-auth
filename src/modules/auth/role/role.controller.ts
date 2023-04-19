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
import { Role, UserRole } from '@prisma/client';
import { RoleUsersReturn } from '../../../shared/models/role/return-types/role-users.model';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { User } from '../../../shared/models/user';
import { RoleUniqueSchema } from '../../../shared/models/userRole/custom-schemas/role-unique/role-unique.schema';
import { UserRole as UserRoleClass } from '../../../shared/models/userRole';

@ApiTags('roles')
@Controller('roles')
export class RoleController {
  constructor(private roleService: RoleService) {}

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
  @ApiOkResponse({ type: [UserRoleClass] })
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
}
