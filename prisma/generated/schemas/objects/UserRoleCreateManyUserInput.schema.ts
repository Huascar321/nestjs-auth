// @ts-nocheck
import Joi from 'joi';

export const UserRoleCreateManyUserInputSchemaObject = {
  id: Joi.number(),
  roleId: Joi.number().required()
};
