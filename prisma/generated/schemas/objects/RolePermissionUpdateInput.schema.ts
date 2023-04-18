// @ts-nocheck
import Joi from 'joi';
import { RoleUpdateOneRequiredWithoutRolePermissionNestedInputSchemaObject } from './RoleUpdateOneRequiredWithoutRolePermissionNestedInput.schema';
import { PermissionUpdateOneRequiredWithoutRolePermissionNestedInputSchemaObject } from './PermissionUpdateOneRequiredWithoutRolePermissionNestedInput.schema';

export const RolePermissionUpdateInputSchemaObject = {
  role: Joi.object().keys(
    RoleUpdateOneRequiredWithoutRolePermissionNestedInputSchemaObject
  ),
  permission: Joi.object().keys(
    PermissionUpdateOneRequiredWithoutRolePermissionNestedInputSchemaObject
  )
};
