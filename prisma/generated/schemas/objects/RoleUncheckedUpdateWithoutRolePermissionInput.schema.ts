// @ts-nocheck
import Joi from 'joi';
import { IntFieldUpdateOperationsInputSchemaObject } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputSchemaObject } from './StringFieldUpdateOperationsInput.schema';
import { UserRoleUncheckedUpdateManyWithoutRoleNestedInputSchemaObject } from './UserRoleUncheckedUpdateManyWithoutRoleNestedInput.schema';

export const RoleUncheckedUpdateWithoutRolePermissionInputSchemaObject = {
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
  userRoles: Joi.object().keys(
    UserRoleUncheckedUpdateManyWithoutRoleNestedInputSchemaObject
  )
};
