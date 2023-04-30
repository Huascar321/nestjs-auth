import { ValidateNested } from 'class-validator';
import { IntersectionType } from '@nestjs/swagger';
import { Role } from '../../role/entities/role.entity';
import { Permission } from '../../permission/entities/permission.entity';

export class RolePermission {
  id: number;
  roleId: number;
  permissionId: number;
}
export class RolePermissionRel {
  @ValidateNested()
  role: Role;
  @ValidateNested()
  permission: Permission;
}
export class RolePermissionFull extends IntersectionType(
  RolePermission,
  RolePermissionRel
) {}
