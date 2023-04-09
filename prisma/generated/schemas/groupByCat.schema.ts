import Joi from 'joi';
import {
  CatWhereInputSchemaObject,
  CatOrderByWithAggregationInputSchemaObject,
  CatScalarWhereWithAggregatesInputSchemaObject
} from './objects';
import { CatScalarFieldEnumSchema } from './enums';

export const CatGroupBySchema = Joi.object()
  .keys({
    where: Joi.object().keys(CatWhereInputSchemaObject),
    orderBy: Joi.object().keys(CatOrderByWithAggregationInputSchemaObject),
    having: Joi.object().keys(CatScalarWhereWithAggregatesInputSchemaObject),
    take: Joi.number(),
    skip: Joi.number(),
    by: Joi.array().items(CatScalarFieldEnumSchema).required()
  })
  .required();
