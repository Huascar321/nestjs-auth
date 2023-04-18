// @ts-nocheck
import Joi from 'joi';
import { StringFieldUpdateOperationsInputSchemaObject } from './StringFieldUpdateOperationsInput.schema';
import { RolePermissionUpdateManyWithoutRoleNestedInputSchemaObject } from './RolePermissionUpdateManyWithoutRoleNestedInput.schema';

export const RoleUpdateWithoutUserRolesInputSchemaObject = {
  name: Joi.alternatives().try(
    Joi.string(),
    Joi.object().keys(StringFieldUpdateOperationsInputSchemaObject)
  ),
  description: Joi.alternatives().try(
    Joi.string(),
    Joi.object().keys(StringFieldUpdateOperationsInputSchemaObject)
  ),
  rolePermission: Joi.object().keys(
    RolePermissionUpdateManyWithoutRoleNestedInputSchemaObject
  )
};
