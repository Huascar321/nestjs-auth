
import {ValidateNested} from 'class-validator'
import {IntersectionType} from '@nestjs/swagger'
import {User} from '../../user/entities/user.entity'
import {Role} from '../../role/entities/role.entity'

export class UserRole {
  id: number ;
  userId: number ;
  roleId: number ;
}
export class UserRoleRel {
  @ValidateNested()
user: User ;
  @ValidateNested()
role: Role ;
}
export class UserRoleFull extends IntersectionType(UserRole, UserRoleRel) {}
