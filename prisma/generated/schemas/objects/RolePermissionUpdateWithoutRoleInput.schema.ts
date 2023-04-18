// @ts-nocheck
import Joi from 'joi';
import { PermissionUpdateOneRequiredWithoutRolePermissionNestedInputSchemaObject } from './PermissionUpdateOneRequiredWithoutRolePermissionNestedInput.schema';

export const RolePermissionUpdateWithoutRoleInputSchemaObject = {
  permission: Joi.object().keys(
    PermissionUpdateOneRequiredWithoutRolePermissionNestedInputSchemaObject
  )
};
