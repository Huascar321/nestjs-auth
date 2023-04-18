// @ts-nocheck
import Joi from 'joi';
import { RolePermissionCreateNestedManyWithoutRoleInputSchemaObject } from './RolePermissionCreateNestedManyWithoutRoleInput.schema';
import { UserRoleCreateNestedManyWithoutRoleInputSchemaObject } from './UserRoleCreateNestedManyWithoutRoleInput.schema';

export const RoleCreateInputSchemaObject = {
  name: Joi.string().required(),
  description: Joi.string().required(),
  rolePermission: Joi.object().keys(
    RolePermissionCreateNestedManyWithoutRoleInputSchemaObject
  ),
  userRoles: Joi.object().keys(
    UserRoleCreateNestedManyWithoutRoleInputSchemaObject
  )
};
