import Joi from 'joi';
import {
  CatUpdateManyMutationInputSchemaObject,
  CatWhereInputSchemaObject
} from './objects';

export const CatUpdateManySchema = Joi.object()
  .keys({
    data: Joi.object().keys(CatUpdateManyMutationInputSchemaObject),
    where: Joi.object().keys(CatWhereInputSchemaObject)
  })
  .required();
