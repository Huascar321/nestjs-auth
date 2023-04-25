
import {ValidateNested} from 'class-validator'
import {IntersectionType} from '@nestjs/swagger'
import {UserRole} from '../../userRole/entities/userRole.entity'

export class User {
  id: number ;
  username: string ;
  password: string ;
}
export class UserRel {
  @ValidateNested()
userRoles: UserRole[] ;
}
export class UserFull extends IntersectionType(User, UserRel) {}
