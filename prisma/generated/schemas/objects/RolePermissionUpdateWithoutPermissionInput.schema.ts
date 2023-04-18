// @ts-nocheck
import Joi from 'joi';
import { RoleUpdateOneRequiredWithoutRolePermissionNestedInputSchemaObject } from './RoleUpdateOneRequiredWithoutRolePermissionNestedInput.schema';

export const RolePermissionUpdateWithoutPermissionInputSchemaObject = {
  role: Joi.object().keys(
    RoleUpdateOneRequiredWithoutRolePermissionNestedInputSchemaObject
  )
};
