// @ts-nocheck
import Joi from 'joi';
import { IntWithAggregatesFilterSchemaObject } from './IntWithAggregatesFilter.schema';
import { StringWithAggregatesFilterSchemaObject } from './StringWithAggregatesFilter.schema';

export const RoleScalarWhereWithAggregatesInputSchemaObject = {
  AND: Joi.alternatives().try(
    Joi.link('#RoleScalarWhereWithAggregatesInput'),
    Joi.array().items(Joi.link('#RoleScalarWhereWithAggregatesInput'))
  ),
  OR: Joi.array().items(Joi.link('#RoleScalarWhereWithAggregatesInput')),
  NOT: Joi.alternatives().try(
    Joi.link('#RoleScalarWhereWithAggregatesInput'),
    Joi.array().items(Joi.link('#RoleScalarWhereWithAggregatesInput'))
  ),
  id: Joi.alternatives().try(
    Joi.object().keys(IntWithAggregatesFilterSchemaObject),
    Joi.number()
  ),
  name: Joi.alternatives().try(
    Joi.object().keys(StringWithAggregatesFilterSchemaObject),
    Joi.string()
  ),
  description: Joi.alternatives().try(
    Joi.object().keys(StringWithAggregatesFilterSchemaObject),
    Joi.string()
  )
};
