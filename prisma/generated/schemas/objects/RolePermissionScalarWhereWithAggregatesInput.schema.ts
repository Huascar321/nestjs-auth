// @ts-nocheck
import Joi from 'joi';
import { IntWithAggregatesFilterSchemaObject } from './IntWithAggregatesFilter.schema';

export const RolePermissionScalarWhereWithAggregatesInputSchemaObject = {
  AND: Joi.alternatives().try(
    Joi.link('#RolePermissionScalarWhereWithAggregatesInput'),
    Joi.array().items(Joi.link('#RolePermissionScalarWhereWithAggregatesInput'))
  ),
  OR: Joi.array().items(
    Joi.link('#RolePermissionScalarWhereWithAggregatesInput')
  ),
  NOT: Joi.alternatives().try(
    Joi.link('#RolePermissionScalarWhereWithAggregatesInput'),
    Joi.array().items(Joi.link('#RolePermissionScalarWhereWithAggregatesInput'))
  ),
  id: Joi.alternatives().try(
    Joi.object().keys(IntWithAggregatesFilterSchemaObject),
    Joi.number()
  ),
  roleId: Joi.alternatives().try(
    Joi.object().keys(IntWithAggregatesFilterSchemaObject),
    Joi.number()
  ),
  permissionId: Joi.alternatives().try(
    Joi.object().keys(IntWithAggregatesFilterSchemaObject),
    Joi.number()
  )
};
