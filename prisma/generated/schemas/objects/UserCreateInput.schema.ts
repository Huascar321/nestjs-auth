// @ts-nocheck
import Joi from 'joi';

export const UserCreateInputSchemaObject = {
  username: Joi.string().required(),
  password: Joi.string().required()
};
