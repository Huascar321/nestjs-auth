// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema';

export const PermissionMaxOrderByAggregateInputSchemaObject = {
  id: SortOrderSchema,
  name: SortOrderSchema,
  description: SortOrderSchema,
  code: SortOrderSchema
};
