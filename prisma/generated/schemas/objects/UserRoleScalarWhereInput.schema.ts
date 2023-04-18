// @ts-nocheck
import Joi from 'joi';
import { IntFilterSchemaObject } from './IntFilter.schema';

export const UserRoleScalarWhereInputSchemaObject = {
  AND: Joi.alternatives().try(
    Joi.link('#UserRoleScalarWhereInput'),
    Joi.array().items(Joi.link('#UserRoleScalarWhereInput'))
  ),
  OR: Joi.array().items(Joi.link('#UserRoleScalarWhereInput')),
  NOT: Joi.alternatives().try(
    Joi.link('#UserRoleScalarWhereInput'),
    Joi.array().items(Joi.link('#UserRoleScalarWhereInput'))
  ),
  id: Joi.alternatives().try(
    Joi.object().keys(IntFilterSchemaObject),
    Joi.number()
  ),
  userId: Joi.alternatives().try(
    Joi.object().keys(IntFilterSchemaObject),
    Joi.number()
  ),
  roleId: Joi.alternatives().try(
    Joi.object().keys(IntFilterSchemaObject),
    Joi.number()
  )
};
