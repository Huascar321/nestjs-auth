import Joi from 'joi';
import { UserRoleWhereUniqueInputSchemaObject } from './objects';

export const UserRoleDeleteOneSchema = Joi.object()
  .keys({ where: Joi.object().keys(UserRoleWhereUniqueInputSchemaObject) })
  .required();
