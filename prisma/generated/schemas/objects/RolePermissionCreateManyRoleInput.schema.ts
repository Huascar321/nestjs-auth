// @ts-nocheck
import Joi from 'joi';

export const RolePermissionCreateManyRoleInputSchemaObject = {
  id: Joi.number(),
  permissionId: Joi.number().required()
};
