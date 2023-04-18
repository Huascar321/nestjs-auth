// @ts-nocheck
import Joi from 'joi';
import { UserRoleUncheckedCreateNestedManyWithoutRoleInputSchemaObject } from './UserRoleUncheckedCreateNestedManyWithoutRoleInput.schema';

export const RoleUncheckedCreateWithoutRolePermissionInputSchemaObject = {
  id: Joi.number(),
  name: Joi.string().required(),
  description: Joi.string().required(),
  userRoles: Joi.object().keys(
    UserRoleUncheckedCreateNestedManyWithoutRoleInputSchemaObject
  )
};
