// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { PermissionCountOrderByAggregateInputSchemaObject } from './PermissionCountOrderByAggregateInput.schema';
import { PermissionAvgOrderByAggregateInputSchemaObject } from './PermissionAvgOrderByAggregateInput.schema';
import { PermissionMaxOrderByAggregateInputSchemaObject } from './PermissionMaxOrderByAggregateInput.schema';
import { PermissionMinOrderByAggregateInputSchemaObject } from './PermissionMinOrderByAggregateInput.schema';
import { PermissionSumOrderByAggregateInputSchemaObject } from './PermissionSumOrderByAggregateInput.schema';

export const PermissionOrderByWithAggregationInputSchemaObject = {
  id: SortOrderSchema,
  name: SortOrderSchema,
  description: SortOrderSchema,
  code: SortOrderSchema,
  _count: Joi.object().keys(PermissionCountOrderByAggregateInputSchemaObject),
  _avg: Joi.object().keys(PermissionAvgOrderByAggregateInputSchemaObject),
  _max: Joi.object().keys(PermissionMaxOrderByAggregateInputSchemaObject),
  _min: Joi.object().keys(PermissionMinOrderByAggregateInputSchemaObject),
  _sum: Joi.object().keys(PermissionSumOrderByAggregateInputSchemaObject)
};
