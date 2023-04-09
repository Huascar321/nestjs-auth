// @ts-nocheck
import Joi from 'joi';

export const CatUncheckedCreateInputSchemaObject = {
  id: Joi.number(),
  name: Joi.string().required(),
  age: Joi.number().required(),
  breed: Joi.string().required()
};
