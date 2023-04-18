// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { RolePermissionCountOrderByAggregateInputSchemaObject } from './RolePermissionCountOrderByAggregateInput.schema';
import { RolePermissionAvgOrderByAggregateInputSchemaObject } from './RolePermissionAvgOrderByAggregateInput.schema';
import { RolePermissionMaxOrderByAggregateInputSchemaObject } from './RolePermissionMaxOrderByAggregateInput.schema';
import { RolePermissionMinOrderByAggregateInputSchemaObject } from './RolePermissionMinOrderByAggregateInput.schema';
import { RolePermissionSumOrderByAggregateInputSchemaObject } from './RolePermissionSumOrderByAggregateInput.schema';

export const RolePermissionOrderByWithAggregationInputSchemaObject = {
  id: SortOrderSchema,
  roleId: SortOrderSchema,
  permissionId: SortOrderSchema,
  _count: Joi.object().keys(
    RolePermissionCountOrderByAggregateInputSchemaObject
  ),
  _avg: Joi.object().keys(RolePermissionAvgOrderByAggregateInputSchemaObject),
  _max: Joi.object().keys(RolePermissionMaxOrderByAggregateInputSchemaObject),
  _min: Joi.object().keys(RolePermissionMinOrderByAggregateInputSchemaObject),
  _sum: Joi.object().keys(RolePermissionSumOrderByAggregateInputSchemaObject)
};
