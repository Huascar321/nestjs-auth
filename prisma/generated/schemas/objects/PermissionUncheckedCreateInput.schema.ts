// @ts-nocheck
import Joi from 'joi';
import { RolePermissionUncheckedCreateNestedManyWithoutPermissionInputSchemaObject } from './RolePermissionUncheckedCreateNestedManyWithoutPermissionInput.schema';

export const PermissionUncheckedCreateInputSchemaObject = {
  id: Joi.number(),
  name: Joi.string().required(),
  description: Joi.string().required(),
  code: Joi.number().required(),
  rolePermission: Joi.object().keys(
    RolePermissionUncheckedCreateNestedManyWithoutPermissionInputSchemaObject
  )
};
