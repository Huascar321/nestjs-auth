// @ts-nocheck
import Joi from 'joi';
import { RolePermissionCreateManyPermissionInputSchemaObject } from './RolePermissionCreateManyPermissionInput.schema';

export const RolePermissionCreateManyPermissionInputEnvelopeSchemaObject = {
  data: Joi.alternatives().try(
    Joi.object().keys(RolePermissionCreateManyPermissionInputSchemaObject),
    Joi.array().items(
      Joi.object().keys(RolePermissionCreateManyPermissionInputSchemaObject)
    )
  ),
  skipDuplicates: Joi.boolean()
};
