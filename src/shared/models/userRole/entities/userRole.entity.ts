import { ValidateNested } from 'class-validator';
import { IntersectionType } from '@nestjs/swagger';
import { User } from '../../user';
import { Role } from '../../role';

export class UserRole {
  id: number;
  userId: number;
  roleId: number;
}
export class UserRoleRel {
  @ValidateNested()
  user: User;
  @ValidateNested()
  role: Role;
}
export class UserRoleFull extends IntersectionType(UserRole, UserRoleRel) {}
