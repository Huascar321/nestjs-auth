import Joi from 'joi';
import {
  RolePermissionUpdateManyMutationInputSchemaObject,
  RolePermissionWhereInputSchemaObject
} from './objects';

export const RolePermissionUpdateManySchema = Joi.object()
  .keys({
    data: Joi.object().keys(RolePermissionUpdateManyMutationInputSchemaObject),
    where: Joi.object().keys(RolePermissionWhereInputSchemaObject)
  })
  .required();
