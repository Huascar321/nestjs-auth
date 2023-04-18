// @ts-nocheck
import Joi from 'joi';
import { IntWithAggregatesFilterSchemaObject } from './IntWithAggregatesFilter.schema';
import { StringWithAggregatesFilterSchemaObject } from './StringWithAggregatesFilter.schema';

export const PermissionScalarWhereWithAggregatesInputSchemaObject = {
  AND: Joi.alternatives().try(
    Joi.link('#PermissionScalarWhereWithAggregatesInput'),
    Joi.array().items(Joi.link('#PermissionScalarWhereWithAggregatesInput'))
  ),
  OR: Joi.array().items(Joi.link('#PermissionScalarWhereWithAggregatesInput')),
  NOT: Joi.alternatives().try(
    Joi.link('#PermissionScalarWhereWithAggregatesInput'),
    Joi.array().items(Joi.link('#PermissionScalarWhereWithAggregatesInput'))
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
  ),
  code: Joi.alternatives().try(
    Joi.object().keys(IntWithAggregatesFilterSchemaObject),
    Joi.number()
  )
};
