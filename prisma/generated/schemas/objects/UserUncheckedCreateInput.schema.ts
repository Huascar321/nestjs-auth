// @ts-nocheck
import Joi from 'joi';

export const UserUncheckedCreateInputSchemaObject = {
  id: Joi.number(),
  username: Joi.string().required(),
  password: Joi.string().required()
};
