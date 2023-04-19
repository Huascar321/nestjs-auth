import { ValidateNested } from 'class-validator';
import { IntersectionType } from '@nestjs/swagger';
import { UserRole } from '../../userRole';
import { RolePermission } from '../../rolePermission';

export class Role {
  id: number;
  name: string;
  description: string;
}
export class RoleRel {
  @ValidateNested()
  rolePermission: RolePermission[];
  @ValidateNested()
  userRoles: UserRole[];
}
export class RoleFull extends IntersectionType(Role, RoleRel) {}
