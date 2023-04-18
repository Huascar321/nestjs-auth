// @ts-nocheck
import Joi from 'joi';
import { RolePermissionUncheckedCreateNestedManyWithoutRoleInputSchemaObject } from './RolePermissionUncheckedCreateNestedManyWithoutRoleInput.schema';
import { UserRoleUncheckedCreateNestedManyWithoutRoleInputSchemaObject } from './UserRoleUncheckedCreateNestedManyWithoutRoleInput.schema';

export const RoleUncheckedCreateInputSchemaObject = {
  id: Joi.number(),
  name: Joi.string().required(),
  description: Joi.string().required(),
  rolePermission: Joi.object().keys(
    RolePermissionUncheckedCreateNestedManyWithoutRoleInputSchemaObject
  ),
  userRoles: Joi.object().keys(
    UserRoleUncheckedCreateNestedManyWithoutRoleInputSchemaObject
  )
};
