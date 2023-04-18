// @ts-nocheck
import Joi from 'joi';
import { IntFieldUpdateOperationsInputSchemaObject } from './IntFieldUpdateOperationsInput.schema';

export const RolePermissionUncheckedUpdateManyWithoutRolePermissionInputSchemaObject =
  {
    id: Joi.alternatives().try(
      Joi.number(),
      Joi.object().keys(IntFieldUpdateOperationsInputSchemaObject)
    ),
    permissionId: Joi.alternatives().try(
      Joi.number(),
      Joi.object().keys(IntFieldUpdateOperationsInputSchemaObject)
    )
  };
