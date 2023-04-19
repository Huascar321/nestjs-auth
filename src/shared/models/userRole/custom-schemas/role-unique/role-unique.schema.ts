import Joi from 'joi';
import { RoleUniqueSchemaObject } from './role-unique-object.schema';

export const RoleUniqueSchema = Joi.object()
  .keys({ data: Joi.object().keys(RoleUniqueSchemaObject) })
  .required();
