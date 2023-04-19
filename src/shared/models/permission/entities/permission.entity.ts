import { ValidateNested } from 'class-validator';
import { IntersectionType } from '@nestjs/swagger';
import { RolePermission } from '../../rolePermission';

export class Permission {
  id: number;
  name: string;
  description: string;
  code: number;
}
export class PermissionRel {
  @ValidateNested()
  rolePermission: RolePermission[];
}
export class PermissionFull extends IntersectionType(
  Permission,
  PermissionRel
) {}
