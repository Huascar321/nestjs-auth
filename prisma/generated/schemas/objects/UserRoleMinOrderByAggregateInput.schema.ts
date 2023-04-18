// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema';

export const UserRoleMinOrderByAggregateInputSchemaObject = {
  id: SortOrderSchema,
  userId: SortOrderSchema,
  roleId: SortOrderSchema
};
