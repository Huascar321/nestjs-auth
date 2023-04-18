// @ts-nocheck
import Joi from 'joi';

export const UserRoleUncheckedCreateInputSchemaObject = {
  id: Joi.number(),
  userId: Joi.number().required(),
  roleId: Joi.number().required()
};
