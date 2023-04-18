import Joi from 'joi';
import { RolePermissionWhereUniqueInputSchemaObject } from './objects';

export const RolePermissionDeleteOneSchema = Joi.object()
  .keys({
    where: Joi.object().keys(RolePermissionWhereUniqueInputSchemaObject)
  })
  .required();
