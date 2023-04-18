// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { UserRoleCountOrderByAggregateInputSchemaObject } from './UserRoleCountOrderByAggregateInput.schema';
import { UserRoleAvgOrderByAggregateInputSchemaObject } from './UserRoleAvgOrderByAggregateInput.schema';
import { UserRoleMaxOrderByAggregateInputSchemaObject } from './UserRoleMaxOrderByAggregateInput.schema';
import { UserRoleMinOrderByAggregateInputSchemaObject } from './UserRoleMinOrderByAggregateInput.schema';
import { UserRoleSumOrderByAggregateInputSchemaObject } from './UserRoleSumOrderByAggregateInput.schema';

export const UserRoleOrderByWithAggregationInputSchemaObject = {
  id: SortOrderSchema,
  userId: SortOrderSchema,
  roleId: SortOrderSchema,
  _count: Joi.object().keys(UserRoleCountOrderByAggregateInputSchemaObject),
  _avg: Joi.object().keys(UserRoleAvgOrderByAggregateInputSchemaObject),
  _max: Joi.object().keys(UserRoleMaxOrderByAggregateInputSchemaObject),
  _min: Joi.object().keys(UserRoleMinOrderByAggregateInputSchemaObject),
  _sum: Joi.object().keys(UserRoleSumOrderByAggregateInputSchemaObject)
};
