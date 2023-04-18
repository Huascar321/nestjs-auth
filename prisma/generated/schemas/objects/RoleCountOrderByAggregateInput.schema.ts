// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema';

export const RoleCountOrderByAggregateInputSchemaObject = {
  id: SortOrderSchema,
  name: SortOrderSchema,
  description: SortOrderSchema
};
