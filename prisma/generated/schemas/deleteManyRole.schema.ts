import Joi from 'joi';
import { RoleWhereInputSchemaObject } from './objects';

export const RoleDeleteManySchema = Joi.object()
  .keys({ where: Joi.object().keys(RoleWhereInputSchemaObject) })
  .required();
