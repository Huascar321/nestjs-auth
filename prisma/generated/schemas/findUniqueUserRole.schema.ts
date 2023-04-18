import Joi from 'joi';
import { UserRoleWhereUniqueInputSchemaObject } from './objects';

export const UserRoleFindUniqueSchema = Joi.object()
  .keys({ where: Joi.object().keys(UserRoleWhereUniqueInputSchemaObject) })
  .required();
