// @ts-nocheck
import Joi from 'joi';

export const PermissionCreateManyInputSchemaObject = {
  id: Joi.number(),
  name: Joi.string().required(),
  description: Joi.string().required(),
  code: Joi.number().required()
};
