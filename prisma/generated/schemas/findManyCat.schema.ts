import Joi from 'joi';
import {
  CatWhereInputSchemaObject,
  CatOrderByWithRelationInputSchemaObject,
  CatWhereUniqueInputSchemaObject
} from './objects';
import { CatScalarFieldEnumSchema } from './enums';

export const CatFindManySchema = Joi.object()
  .keys({
    where: Joi.object().keys(CatWhereInputSchemaObject),
    orderBy: Joi.object().keys(CatOrderByWithRelationInputSchemaObject),
    cursor: Joi.object().keys(CatWhereUniqueInputSchemaObject),
    take: Joi.number(),
    skip: Joi.number(),
    distinct: Joi.array().items(CatScalarFieldEnumSchema)
  })
  .required();
