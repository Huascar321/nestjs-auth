import Joi from 'joi';
import { UserRoleCreateInputSchemaObject } from './objects';

export const UserRoleCreateSchema = Joi.object()
  .keys({ data: Joi.object().keys(UserRoleCreateInputSchemaObject) })
  .required();
