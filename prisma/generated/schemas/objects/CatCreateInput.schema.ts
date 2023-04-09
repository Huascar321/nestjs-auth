// @ts-nocheck
import Joi from 'joi';

export const CatCreateInputSchemaObject = {
  name: Joi.string().required(),
  age: Joi.number().required(),
  breed: Joi.string().required()
};
