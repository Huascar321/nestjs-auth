import Joi from 'joi';
import {
  CatUpdateInputSchemaObject,
  CatWhereUniqueInputSchemaObject
} from './objects';

export const CatUpdateOneSchema = Joi.object()
  .keys({
    data: Joi.object().keys(CatUpdateInputSchemaObject),
    where: Joi.object().keys(CatWhereUniqueInputSchemaObject)
  })
  .required();
