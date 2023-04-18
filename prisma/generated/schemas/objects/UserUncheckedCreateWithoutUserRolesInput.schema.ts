// @ts-nocheck
import Joi from 'joi';

export const UserUncheckedCreateWithoutUserRolesInputSchemaObject = {
  id: Joi.number(),
  username: Joi.string().required(),
  password: Joi.string().required()
};
