// @ts-nocheck
import Joi from 'joi';

export const RolePermissionCreateManyInputSchemaObject = {
  id: Joi.number(),
  roleId: Joi.number().required(),
  permissionId: Joi.number().required()
};
