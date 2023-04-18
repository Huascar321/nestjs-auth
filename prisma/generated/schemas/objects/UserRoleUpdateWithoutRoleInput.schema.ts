// @ts-nocheck
import Joi from 'joi';
import { UserUpdateOneRequiredWithoutUserRolesNestedInputSchemaObject } from './UserUpdateOneRequiredWithoutUserRolesNestedInput.schema';

export const UserRoleUpdateWithoutRoleInputSchemaObject = {
  user: Joi.object().keys(
    UserUpdateOneRequiredWithoutUserRolesNestedInputSchemaObject
  )
};
