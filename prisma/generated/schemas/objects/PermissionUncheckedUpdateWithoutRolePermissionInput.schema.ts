// @ts-nocheck
import Joi from 'joi';
import { IntFieldUpdateOperationsInputSchemaObject } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputSchemaObject } from './StringFieldUpdateOperationsInput.schema';

export const PermissionUncheckedUpdateWithoutRolePermissionInputSchemaObject = {
  id: Joi.alternatives().try(
    Joi.number(),
    Joi.object().keys(IntFieldUpdateOperationsInputSchemaObject)
  ),
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
  )
};
