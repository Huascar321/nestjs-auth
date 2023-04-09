// @ts-nocheck
import Joi from 'joi';
import { IntWithAggregatesFilterSchemaObject } from './IntWithAggregatesFilter.schema';
import { StringWithAggregatesFilterSchemaObject } from './StringWithAggregatesFilter.schema';

export const UserScalarWhereWithAggregatesInputSchemaObject = {
  AND: Joi.alternatives().try(
    Joi.link('#UserScalarWhereWithAggregatesInput'),
    Joi.array().items(Joi.link('#UserScalarWhereWithAggregatesInput'))
  ),
  OR: Joi.array().items(Joi.link('#UserScalarWhereWithAggregatesInput')),
  NOT: Joi.alternatives().try(
    Joi.link('#UserScalarWhereWithAggregatesInput'),
    Joi.array().items(Joi.link('#UserScalarWhereWithAggregatesInput'))
  ),
  id: Joi.alternatives().try(
    Joi.object().keys(IntWithAggregatesFilterSchemaObject),
    Joi.number()
  ),
  username: Joi.alternatives().try(
    Joi.object().keys(StringWithAggregatesFilterSchemaObject),
    Joi.string()
  ),
  password: Joi.alternatives().try(
    Joi.object().keys(StringWithAggregatesFilterSchemaObject),
    Joi.string()
  )
};
