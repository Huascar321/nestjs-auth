import Joi from 'joi';
import { CatWhereUniqueInputSchemaObject } from './objects';

export const CatFindUniqueSchema = Joi.object()
  .keys({ where: Joi.object().keys(CatWhereUniqueInputSchemaObject) })
  .required();
