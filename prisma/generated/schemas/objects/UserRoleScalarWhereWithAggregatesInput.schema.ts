// @ts-nocheck
import Joi from 'joi';
import { IntWithAggregatesFilterSchemaObject } from './IntWithAggregatesFilter.schema';

export const UserRoleScalarWhereWithAggregatesInputSchemaObject = {
  AND: Joi.alternatives().try(
    Joi.link('#UserRoleScalarWhereWithAggregatesInput'),
    Joi.array().items(Joi.link('#UserRoleScalarWhereWithAggregatesInput'))
  ),
  OR: Joi.array().items(Joi.link('#UserRoleScalarWhereWithAggregatesInput')),
  NOT: Joi.alternatives().try(
    Joi.link('#UserRoleScalarWhereWithAggregatesInput'),
    Joi.array().items(Joi.link('#UserRoleScalarWhereWithAggregatesInput'))
  ),
  id: Joi.alternatives().try(
    Joi.object().keys(IntWithAggregatesFilterSchemaObject),
    Joi.number()
  ),
  userId: Joi.alternatives().try(
    Joi.object().keys(IntWithAggregatesFilterSchemaObject),
    Joi.number()
  ),
  roleId: Joi.alternatives().try(
    Joi.object().keys(IntWithAggregatesFilterSchemaObject),
    Joi.number()
  )
};
