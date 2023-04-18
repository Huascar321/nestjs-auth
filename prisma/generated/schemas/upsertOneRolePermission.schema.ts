import Joi from 'joi';
import {
  RolePermissionWhereUniqueInputSchemaObject,
  RolePermissionCreateInputSchemaObject,
  RolePermissionUpdateInputSchemaObject
} from './objects';

export const RolePermissionUpsertSchema = Joi.object()
  .keys({
    where: Joi.object().keys(RolePermissionWhereUniqueInputSchemaObject),
    data: Joi.object().keys(RolePermissionCreateInputSchemaObject),
    update: Joi.object().keys(RolePermissionUpdateInputSchemaObject)
  })
  .required();
