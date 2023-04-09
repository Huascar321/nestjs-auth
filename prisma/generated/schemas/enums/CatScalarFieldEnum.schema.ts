import Joi from 'joi';

export const CatScalarFieldEnumSchema = Joi.string().valid(
  ...['id', 'name', 'age', 'breed']
);
