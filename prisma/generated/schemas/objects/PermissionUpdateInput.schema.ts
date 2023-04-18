// @ts-nocheck
import Joi from 'joi';
import { StringFieldUpdateOperationsInputSchemaObject } from './StringFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputSchemaObject } from './IntFieldUpdateOperationsInput.schema';
import { RolePermissionUpdateManyWithoutPermissionNestedInputSchemaObject } from './RolePermissionUpdateManyWithoutPermissionNestedInput.schema';

export const PermissionUpdateInputSchemaObject = {
  name: Joi.alternatives().try(
    Joi.string(),
    Joi.object().keys(StringFieldUpdateOperationsInputSchemaObject)
  ),
  description: Joi.alternatives().try(
    Joi.string(),
    Joi.object().keys(StringFieldUpdateOperationsInputSchemaObject)
  ),
  code: Joi.alternatives().try(
    Joi.number(),
    Joi.object().keys(IntFieldUpdateOperationsInputSchemaObject)
  ),
  rolePermission: Joi.object().keys(
    RolePermissionUpdateManyWithoutPermissionNestedInputSchemaObject
  )
};
