// @ts-nocheck
import Joi from 'joi';
import { UserRoleCreateManyUserInputSchemaObject } from './UserRoleCreateManyUserInput.schema';

export const UserRoleCreateManyUserInputEnvelopeSchemaObject = {
  data: Joi.alternatives().try(
    Joi.object().keys(UserRoleCreateManyUserInputSchemaObject),
    Joi.array().items(
      Joi.object().keys(UserRoleCreateManyUserInputSchemaObject)
    )
  ),
  skipDuplicates: Joi.boolean()
};
