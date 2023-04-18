// @ts-nocheck
import Joi from 'joi';

export const UserRoleUncheckedCreateWithoutRoleInputSchemaObject = {
  id: Joi.number(),
  userId: Joi.number().required()
};
