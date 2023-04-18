// @ts-nocheck
import Joi from 'joi';
import { UserCreateNestedOneWithoutUserRolesInputSchemaObject } from './UserCreateNestedOneWithoutUserRolesInput.schema';
import { RoleCreateNestedOneWithoutUserRolesInputSchemaObject } from './RoleCreateNestedOneWithoutUserRolesInput.schema';

export const UserRoleCreateInputSchemaObject = {
  user: Joi.object().keys(UserCreateNestedOneWithoutUserRolesInputSchemaObject),
  role: Joi.object().keys(RoleCreateNestedOneWithoutUserRolesInputSchemaObject)
};
