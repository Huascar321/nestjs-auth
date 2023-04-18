// @ts-nocheck
import Joi from 'joi';
import { IntFieldUpdateOperationsInputSchemaObject } from './IntFieldUpdateOperationsInput.schema';

export const UserRoleUncheckedUpdateManyInputSchemaObject = {
  id: Joi.alternatives().try(
    Joi.number(),
    Joi.object().keys(IntFieldUpdateOperationsInputSchemaObject)
  ),
  userId: Joi.alternatives().try(
    Joi.number(),
    Joi.object().keys(IntFieldUpdateOperationsInputSchemaObject)
  ),
  roleId: Joi.alternatives().try(
    Joi.number(),
    Joi.object().keys(IntFieldUpdateOperationsInputSchemaObject)
  )
};
