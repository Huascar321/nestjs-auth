// @ts-nocheck
import Joi from 'joi';

export const UserRoleCreateManyInputSchemaObject = {
  id: Joi.number(),
  userId: Joi.number().required(),
  roleId: Joi.number().required()
};
