// @ts-nocheck
import Joi from 'joi';
import { UserRoleCreateNestedManyWithoutRoleInputSchemaObject } from './UserRoleCreateNestedManyWithoutRoleInput.schema';

export const RoleCreateWithoutRolePermissionInputSchemaObject = {
  name: Joi.string().required(),
  description: Joi.string().required(),
  userRoles: Joi.object().keys(
    UserRoleCreateNestedManyWithoutRoleInputSchemaObject
  )
};
