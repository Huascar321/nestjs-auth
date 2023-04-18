// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema';

export const UserRoleMaxOrderByAggregateInputSchemaObject = {
  id: SortOrderSchema,
  userId: SortOrderSchema,
  roleId: SortOrderSchema
};
