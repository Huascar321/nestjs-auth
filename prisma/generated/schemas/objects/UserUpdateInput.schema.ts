// @ts-nocheck
import Joi from 'joi';
import { StringFieldUpdateOperationsInputSchemaObject } from './StringFieldUpdateOperationsInput.schema';
import { UserRoleUpdateManyWithoutUserNestedInputSchemaObject } from './UserRoleUpdateManyWithoutUserNestedInput.schema';

export const UserUpdateInputSchemaObject = {
  username: Joi.alternatives().try(
    Joi.string(),
    Joi.object().keys(StringFieldUpdateOperationsInputSchemaObject)
  ),
  password: Joi.alternatives().try(
    Joi.string(),
    Joi.object().keys(StringFieldUpdateOperationsInputSchemaObject)
  ),
  userRoles: Joi.object().keys(
    UserRoleUpdateManyWithoutUserNestedInputSchemaObject
  )
};
