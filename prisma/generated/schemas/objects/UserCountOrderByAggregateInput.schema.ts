// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema';

export const UserCountOrderByAggregateInputSchemaObject = {
  id: SortOrderSchema,
  username: SortOrderSchema,
  password: SortOrderSchema
};
