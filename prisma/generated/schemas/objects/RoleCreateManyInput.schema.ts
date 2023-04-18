// @ts-nocheck
import Joi from 'joi';

export const RoleCreateManyInputSchemaObject = {
  id: Joi.number(),
  name: Joi.string().required(),
  description: Joi.string().required()
};
