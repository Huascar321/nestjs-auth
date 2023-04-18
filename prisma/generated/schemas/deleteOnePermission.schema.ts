import Joi from 'joi';
import { PermissionWhereUniqueInputSchemaObject } from './objects';

export const PermissionDeleteOneSchema = Joi.object()
  .keys({ where: Joi.object().keys(PermissionWhereUniqueInputSchemaObject) })
  .required();
