// @ts-nocheck
import Joi from 'joi';
import { RolePermissionCreateManyRoleInputSchemaObject } from './RolePermissionCreateManyRoleInput.schema';

export const RolePermissionCreateManyRoleInputEnvelopeSchemaObject = {
  data: Joi.alternatives().try(
    Joi.object().keys(RolePermissionCreateManyRoleInputSchemaObject),
    Joi.array().items(
      Joi.object().keys(RolePermissionCreateManyRoleInputSchemaObject)
    )
  ),
  skipDuplicates: Joi.boolean()
};
