// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { CatCountOrderByAggregateInputSchemaObject } from './CatCountOrderByAggregateInput.schema';
import { CatAvgOrderByAggregateInputSchemaObject } from './CatAvgOrderByAggregateInput.schema';
import { CatMaxOrderByAggregateInputSchemaObject } from './CatMaxOrderByAggregateInput.schema';
import { CatMinOrderByAggregateInputSchemaObject } from './CatMinOrderByAggregateInput.schema';
import { CatSumOrderByAggregateInputSchemaObject } from './CatSumOrderByAggregateInput.schema';

export const CatOrderByWithAggregationInputSchemaObject = {
  id: SortOrderSchema,
  name: SortOrderSchema,
  age: SortOrderSchema,
  breed: SortOrderSchema,
  _count: Joi.object().keys(CatCountOrderByAggregateInputSchemaObject),
  _avg: Joi.object().keys(CatAvgOrderByAggregateInputSchemaObject),
  _max: Joi.object().keys(CatMaxOrderByAggregateInputSchemaObject),
  _min: Joi.object().keys(CatMinOrderByAggregateInputSchemaObject),
  _sum: Joi.object().keys(CatSumOrderByAggregateInputSchemaObject)
};
