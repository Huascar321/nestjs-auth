import Joi from 'joi';
import { PermissionWhereUniqueInputSchemaObject } from './objects';

export const PermissionFindUniqueSchema = Joi.object()
  .keys({ where: Joi.object().keys(PermissionWhereUniqueInputSchemaObject) })
  .required();
