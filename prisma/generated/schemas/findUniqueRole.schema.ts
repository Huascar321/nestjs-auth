import Joi from 'joi';
import { RoleWhereUniqueInputSchemaObject } from './objects';

export const RoleFindUniqueSchema = Joi.object()
  .keys({ where: Joi.object().keys(RoleWhereUniqueInputSchemaObject) })
  .required();
