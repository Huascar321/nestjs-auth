// @ts-nocheck
import Joi from 'joi';

export const UserRoleCreateManyRoleInputSchemaObject = {
  id: Joi.number(),
  userId: Joi.number().required()
};
