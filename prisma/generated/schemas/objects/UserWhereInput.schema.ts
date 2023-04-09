// @ts-nocheck
import Joi from 'joi';
import { IntFilterSchemaObject } from './IntFilter.schema';
import { StringFilterSchemaObject } from './StringFilter.schema';

export const UserWhereInputSchemaObject = {
  AND: Joi.alternatives().try(
    Joi.link('#UserWhereInput'),
    Joi.array().items(Joi.link('#UserWhereInput'))
  ),
  OR: Joi.array().items(Joi.link('#UserWhereInput')),
  NOT: Joi.alternatives().try(
    Joi.link('#UserWhereInput'),
    Joi.array().items(Joi.link('#UserWhereInput'))
  ),
  id: Joi.alternatives().try(
    Joi.object().keys(IntFilterSchemaObject),
    Joi.number()
  ),
  username: Joi.alternatives().try(
    Joi.object().keys(StringFilterSchemaObject),
    Joi.string()
  ),
  password: Joi.alternatives().try(
    Joi.object().keys(StringFilterSchemaObject),
    Joi.string()
  )
};
