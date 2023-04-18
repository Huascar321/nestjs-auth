// @ts-nocheck
import Joi from 'joi';
import { StringFieldUpdateOperationsInputSchemaObject } from './StringFieldUpdateOperationsInput.schema';
import { UserRoleUpdateManyWithoutRoleNestedInputSchemaObject } from './UserRoleUpdateManyWithoutRoleNestedInput.schema';

export const RoleUpdateWithoutRolePermissionInputSchemaObject = {
  name: Joi.alternatives().try(
    Joi.string(),
    Joi.object().keys(StringFieldUpdateOperationsInputSchemaObject)
  ),
  description: Joi.alternatives().try(
    Joi.string(),
    Joi.object().keys(StringFieldUpdateOperationsInputSchemaObject)
  ),
  userRoles: Joi.object().keys(
    UserRoleUpdateManyWithoutRoleNestedInputSchemaObject
  )
};
