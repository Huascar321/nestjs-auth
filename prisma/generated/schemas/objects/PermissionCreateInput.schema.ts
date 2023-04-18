// @ts-nocheck
import Joi from 'joi';
import { RolePermissionCreateNestedManyWithoutPermissionInputSchemaObject } from './RolePermissionCreateNestedManyWithoutPermissionInput.schema';

export const PermissionCreateInputSchemaObject = {
  name: Joi.string().required(),
  description: Joi.string().required(),
  code: Joi.number().required(),
  rolePermission: Joi.object().keys(
    RolePermissionCreateNestedManyWithoutPermissionInputSchemaObject
  )
};
