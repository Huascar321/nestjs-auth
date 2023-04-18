// @ts-nocheck
import Joi from 'joi';

export const RolePermissionCreateManyPermissionInputSchemaObject = {
  id: Joi.number(),
  roleId: Joi.number().required()
};
