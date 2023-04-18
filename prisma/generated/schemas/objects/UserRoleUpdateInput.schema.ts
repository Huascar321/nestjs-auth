// @ts-nocheck
import Joi from 'joi';
import { UserUpdateOneRequiredWithoutUserRolesNestedInputSchemaObject } from './UserUpdateOneRequiredWithoutUserRolesNestedInput.schema';
import { RoleUpdateOneRequiredWithoutUserRolesNestedInputSchemaObject } from './RoleUpdateOneRequiredWithoutUserRolesNestedInput.schema';

export const UserRoleUpdateInputSchemaObject = {
  user: Joi.object().keys(
    UserUpdateOneRequiredWithoutUserRolesNestedInputSchemaObject
  ),
  role: Joi.object().keys(
    RoleUpdateOneRequiredWithoutUserRolesNestedInputSchemaObject
  )
};
