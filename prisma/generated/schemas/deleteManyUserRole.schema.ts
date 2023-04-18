import Joi from 'joi';
import { UserRoleWhereInputSchemaObject } from './objects';

export const UserRoleDeleteManySchema = Joi.object()
  .keys({ where: Joi.object().keys(UserRoleWhereInputSchemaObject) })
  .required();
