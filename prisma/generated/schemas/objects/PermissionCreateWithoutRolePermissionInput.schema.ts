// @ts-nocheck
import Joi from 'joi';

export const PermissionCreateWithoutRolePermissionInputSchemaObject = {
  name: Joi.string().required(),
  description: Joi.string().required(),
  code: Joi.number().required()
};
