// @ts-nocheck
import Joi from 'joi';

export const RolePermissionUncheckedCreateInputSchemaObject = {
  id: Joi.number(),
  roleId: Joi.number().required(),
  permissionId: Joi.number().required()
};
