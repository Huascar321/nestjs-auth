import { ValidateNested } from 'class-validator';
import { IntersectionType } from '@nestjs/swagger';
import { Role } from '../../role';
import { Permission } from '../../permission';

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
