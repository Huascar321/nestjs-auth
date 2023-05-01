import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { extractAccessTokenFromHeader } from '../helper/extractor.helper';
import { jwtConstant } from '../../shared/constants/jwt.constant';
import { Reflector } from '@nestjs/core';
import { Permission } from '../../shared/models/permission/permission.model';
import { PERMISSION_KEY } from '../decorators/require-permission.decorator';
import { UserProfile } from '../../shared/models/user/entities/user-profile.entity';

@Injectable()
export class PermissionGuard implements CanActivate {
  constructor(private jwtService: JwtService, private reflector: Reflector) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const requirePermission = this.reflector.getAllAndOverride<Permission>(
      PERMISSION_KEY,
      [context.getHandler(), context.getClass()]
    );
    if (!requirePermission) return true;
    const request = context.switchToHttp().getRequest();
    const accessToken = extractAccessTokenFromHeader(request);
    if (!accessToken) throw new ForbiddenException();
    try {
      const userInfo: UserProfile = await this.jwtService.verifyAsync(
        accessToken,
        {
          secret: jwtConstant.secret
        }
      );
      return userInfo.permissionList.some(
        (permission) => permission === requirePermission
      );
    } catch (error) {
      throw new ForbiddenException();
    }
  }
}
