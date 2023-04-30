import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { UserService } from './user.service';
import { Observable } from 'rxjs';
import { User } from '@prisma/client';
import { UserHelper as UserClass } from '../../../shared/models/user/entities/user-helper.entity';

@ApiTags('users')
@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  @ApiOkResponse({ type: UserClass })
  findAllUsers(): Observable<Omit<User, 'password'>[]> {
    return this.userService.findAllUsers();
  }
}
