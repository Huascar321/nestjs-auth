import Joi from 'joi';
import { CatCreateInputSchemaObject } from './objects';

export const CatCreateSchema = Joi.object()
  .keys({ data: Joi.object().keys(CatCreateInputSchemaObject) })
  .required();
