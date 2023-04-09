// @ts-nocheck
import Joi from 'joi';
import { IntFilterSchemaObject } from './IntFilter.schema';
import { StringFilterSchemaObject } from './StringFilter.schema';

export const CatWhereInputSchemaObject = {
  AND: Joi.alternatives().try(
    Joi.link('#CatWhereInput'),
    Joi.array().items(Joi.link('#CatWhereInput'))
  ),
  OR: Joi.array().items(Joi.link('#CatWhereInput')),
  NOT: Joi.alternatives().try(
    Joi.link('#CatWhereInput'),
    Joi.array().items(Joi.link('#CatWhereInput'))
  ),
  id: Joi.alternatives().try(
    Joi.object().keys(IntFilterSchemaObject),
    Joi.number()
  ),
  name: Joi.alternatives().try(
    Joi.object().keys(StringFilterSchemaObject),
    Joi.string()
  ),
  age: Joi.alternatives().try(
    Joi.object().keys(IntFilterSchemaObject),
    Joi.number()
  ),
  breed: Joi.alternatives().try(
    Joi.object().keys(StringFilterSchemaObject),
    Joi.string()
  )
};
