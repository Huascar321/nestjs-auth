// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema';

export const PermissionCountOrderByAggregateInputSchemaObject = {
  id: SortOrderSchema,
  name: SortOrderSchema,
  description: SortOrderSchema,
  code: SortOrderSchema
};
