// @ts-nocheck
import Joi from 'joi';
import { RolePermissionUncheckedCreateNestedManyWithoutRoleInputSchemaObject } from './RolePermissionUncheckedCreateNestedManyWithoutRoleInput.schema';

export const RoleUncheckedCreateWithoutUserRolesInputSchemaObject = {
  id: Joi.number(),
  name: Joi.string().required(),
  description: Joi.string().required(),
  rolePermission: Joi.object().keys(
    RolePermissionUncheckedCreateNestedManyWithoutRoleInputSchemaObject
  )
};
