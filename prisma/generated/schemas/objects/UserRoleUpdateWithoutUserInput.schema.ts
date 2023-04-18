// @ts-nocheck
import Joi from 'joi';
import { RoleUpdateOneRequiredWithoutUserRolesNestedInputSchemaObject } from './RoleUpdateOneRequiredWithoutUserRolesNestedInput.schema';

export const UserRoleUpdateWithoutUserInputSchemaObject = {
  role: Joi.object().keys(
    RoleUpdateOneRequiredWithoutUserRolesNestedInputSchemaObject
  )
};
