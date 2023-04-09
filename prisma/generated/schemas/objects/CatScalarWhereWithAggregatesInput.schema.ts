// @ts-nocheck
import Joi from 'joi';
import { IntWithAggregatesFilterSchemaObject } from './IntWithAggregatesFilter.schema';
import { StringWithAggregatesFilterSchemaObject } from './StringWithAggregatesFilter.schema';

export const CatScalarWhereWithAggregatesInputSchemaObject = {
  AND: Joi.alternatives().try(
    Joi.link('#CatScalarWhereWithAggregatesInput'),
    Joi.array().items(Joi.link('#CatScalarWhereWithAggregatesInput'))
  ),
  OR: Joi.array().items(Joi.link('#CatScalarWhereWithAggregatesInput')),
  NOT: Joi.alternatives().try(
    Joi.link('#CatScalarWhereWithAggregatesInput'),
    Joi.array().items(Joi.link('#CatScalarWhereWithAggregatesInput'))
  ),
  id: Joi.alternatives().try(
    Joi.object().keys(IntWithAggregatesFilterSchemaObject),
    Joi.number()
  ),
  name: Joi.alternatives().try(
    Joi.object().keys(StringWithAggregatesFilterSchemaObject),
    Joi.string()
  ),
  age: Joi.alternatives().try(
    Joi.object().keys(IntWithAggregatesFilterSchemaObject),
    Joi.number()
  ),
  breed: Joi.alternatives().try(
    Joi.object().keys(StringWithAggregatesFilterSchemaObject),
    Joi.string()
  )
};
