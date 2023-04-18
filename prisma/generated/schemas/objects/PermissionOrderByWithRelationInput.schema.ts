// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { RolePermissionOrderByRelationAggregateInputSchemaObject } from './RolePermissionOrderByRelationAggregateInput.schema';

export const PermissionOrderByWithRelationInputSchemaObject = {
  id: SortOrderSchema,
  name: SortOrderSchema,
  description: SortOrderSchema,
  code: SortOrderSchema,
  rolePermission: Joi.object().keys(
    RolePermissionOrderByRelationAggregateInputSchemaObject
  )
};
