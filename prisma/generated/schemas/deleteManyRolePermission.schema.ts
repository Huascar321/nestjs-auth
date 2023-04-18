import Joi from 'joi';
import { RolePermissionWhereInputSchemaObject } from './objects';

export const RolePermissionDeleteManySchema = Joi.object()
  .keys({ where: Joi.object().keys(RolePermissionWhereInputSchemaObject) })
  .required();
