import Joi from 'joi';
import { PermissionWhereInputSchemaObject } from './objects';

export const PermissionDeleteManySchema = Joi.object()
  .keys({ where: Joi.object().keys(PermissionWhereInputSchemaObject) })
  .required();
