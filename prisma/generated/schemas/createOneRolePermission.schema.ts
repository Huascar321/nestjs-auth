import Joi from 'joi';
import { RolePermissionCreateInputSchemaObject } from './objects';

export const RolePermissionCreateSchema = Joi.object()
  .keys({ data: Joi.object().keys(RolePermissionCreateInputSchemaObject) })
  .required();
