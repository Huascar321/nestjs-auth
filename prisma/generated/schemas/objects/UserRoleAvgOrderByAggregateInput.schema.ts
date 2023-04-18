// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema';

export const UserRoleAvgOrderByAggregateInputSchemaObject = {
  id: SortOrderSchema,
  userId: SortOrderSchema,
  roleId: SortOrderSchema
};
