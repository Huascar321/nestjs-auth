// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema';

export const CatOrderByWithRelationInputSchemaObject = {
  id: SortOrderSchema,
  name: SortOrderSchema,
  age: SortOrderSchema,
  breed: SortOrderSchema
};
