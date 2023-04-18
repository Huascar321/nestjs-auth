// @ts-nocheck
import Joi from 'joi';
import { RolePermissionCreateNestedManyWithoutRoleInputSchemaObject } from './RolePermissionCreateNestedManyWithoutRoleInput.schema';

export const RoleCreateWithoutUserRolesInputSchemaObject = {
  name: Joi.string().required(),
  description: Joi.string().required(),
  rolePermission: Joi.object().keys(
    RolePermissionCreateNestedManyWithoutRoleInputSchemaObject
  )
};
