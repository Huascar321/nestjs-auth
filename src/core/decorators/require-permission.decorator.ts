import { Permission } from '../../shared/models/permission/permission.model';
import { SetMetadata } from '@nestjs/common';

export const PERMISSION_KEY = 'permissions';
export const RequirePermission = (permission: Permission) =>
  SetMetadata(PERMISSION_KEY, permission);
