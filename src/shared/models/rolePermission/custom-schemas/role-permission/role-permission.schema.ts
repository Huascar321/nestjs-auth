import Joi from 'joi';
import { RolePermissionSchemaObject } from './role-permission-object.schema';

export const RolePermissionSchema = Joi.object()
  .keys({ data: Joi.object().keys(RolePermissionSchemaObject) })
  .required();
