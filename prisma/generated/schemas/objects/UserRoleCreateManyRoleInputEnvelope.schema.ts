// @ts-nocheck
import Joi from 'joi';
import { UserRoleCreateManyRoleInputSchemaObject } from './UserRoleCreateManyRoleInput.schema';

export const UserRoleCreateManyRoleInputEnvelopeSchemaObject = {
  data: Joi.alternatives().try(
    Joi.object().keys(UserRoleCreateManyRoleInputSchemaObject),
    Joi.array().items(
      Joi.object().keys(UserRoleCreateManyRoleInputSchemaObject)
    )
  ),
  skipDuplicates: Joi.boolean()
};
