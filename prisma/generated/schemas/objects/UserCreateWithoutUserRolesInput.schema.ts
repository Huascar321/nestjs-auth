// @ts-nocheck
import Joi from 'joi';

export const UserCreateWithoutUserRolesInputSchemaObject = {
  username: Joi.string().required(),
  password: Joi.string().required()
};
