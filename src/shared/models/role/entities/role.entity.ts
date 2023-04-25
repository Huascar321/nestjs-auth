
import {ValidateNested} from 'class-validator'
import {IntersectionType} from '@nestjs/swagger'
import {UserRole} from '../../userRole/entities/userRole.entity'
import {RolePermission} from '../../rolePermission/entities/rolePermission.entity'

export class Role {
  id: number ;
  name: string ;
  description: string ;
}
export class RoleRel {
  @ValidateNested()
rolePermission: RolePermission[] ;
  @ValidateNested()
userRoles: UserRole[] ;
}
export class RoleFull extends IntersectionType(Role, RoleRel) {}
