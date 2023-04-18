// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { RoleCountOrderByAggregateInputSchemaObject } from './RoleCountOrderByAggregateInput.schema';
import { RoleAvgOrderByAggregateInputSchemaObject } from './RoleAvgOrderByAggregateInput.schema';
import { RoleMaxOrderByAggregateInputSchemaObject } from './RoleMaxOrderByAggregateInput.schema';
import { RoleMinOrderByAggregateInputSchemaObject } from './RoleMinOrderByAggregateInput.schema';
import { RoleSumOrderByAggregateInputSchemaObject } from './RoleSumOrderByAggregateInput.schema';

export const RoleOrderByWithAggregationInputSchemaObject = {
  id: SortOrderSchema,
  name: SortOrderSchema,
  description: SortOrderSchema,
  _count: Joi.object().keys(RoleCountOrderByAggregateInputSchemaObject),
  _avg: Joi.object().keys(RoleAvgOrderByAggregateInputSchemaObject),
  _max: Joi.object().keys(RoleMaxOrderByAggregateInputSchemaObject),
  _min: Joi.object().keys(RoleMinOrderByAggregateInputSchemaObject),
  _sum: Joi.object().keys(RoleSumOrderByAggregateInputSchemaObject)
};
