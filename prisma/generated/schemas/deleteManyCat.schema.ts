import Joi from 'joi';
import { CatWhereInputSchemaObject } from './objects';

export const CatDeleteManySchema = Joi.object()
  .keys({ where: Joi.object().keys(CatWhereInputSchemaObject) })
  .required();
