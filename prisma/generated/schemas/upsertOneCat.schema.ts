import Joi from 'joi';
import {
  CatWhereUniqueInputSchemaObject,
  CatCreateInputSchemaObject,
  CatUpdateInputSchemaObject
} from './objects';

export const CatUpsertSchema = Joi.object()
  .keys({
    where: Joi.object().keys(CatWhereUniqueInputSchemaObject),
    data: Joi.object().keys(CatCreateInputSchemaObject),
    update: Joi.object().keys(CatUpdateInputSchemaObject)
  })
  .required();
