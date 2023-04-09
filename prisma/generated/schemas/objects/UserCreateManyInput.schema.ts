// @ts-nocheck
import Joi from 'joi';

export const UserCreateManyInputSchemaObject = {
  id: Joi.number(),
  username: Joi.string().required(),
  password: Joi.string().required()
};
