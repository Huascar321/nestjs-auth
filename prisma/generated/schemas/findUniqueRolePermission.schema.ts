import Joi from 'joi';
import { RolePermissionWhereUniqueInputSchemaObject } from './objects';

export const RolePermissionFindUniqueSchema = Joi.object()
  .keys({
    where: Joi.object().keys(RolePermissionWhereUniqueInputSchemaObject)
  })
  .required();
