import Joi from 'joi';
import { PermissionCreateInputSchemaObject } from './objects';

export const PermissionCreateSchema = Joi.object()
  .keys({ data: Joi.object().keys(PermissionCreateInputSchemaObject) })
  .required();
