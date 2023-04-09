import Joi from 'joi';
import {
  CatWhereInputSchemaObject,
  CatOrderByWithRelationInputSchemaObject,
  CatWhereUniqueInputSchemaObject
} from './objects';

export const CatAggregateSchema = Joi.object()
  .keys({
    where: Joi.object().keys(CatWhereInputSchemaObject),
    orderBy: Joi.object().keys(CatOrderByWithRelationInputSchemaObject),
    cursor: Joi.object().keys(CatWhereUniqueInputSchemaObject),
    take: Joi.number(),
    skip: Joi.number()
  })
  .required();
