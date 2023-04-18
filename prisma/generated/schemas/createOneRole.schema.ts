import Joi from 'joi';
import { RoleCreateInputSchemaObject } from './objects';

export const RoleCreateSchema = Joi.object()
  .keys({ data: Joi.object().keys(RoleCreateInputSchemaObject) })
  .required();
