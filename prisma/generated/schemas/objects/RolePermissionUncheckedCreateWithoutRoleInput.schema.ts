// @ts-nocheck
import Joi from 'joi';

export const RolePermissionUncheckedCreateWithoutRoleInputSchemaObject = {
  id: Joi.number(),
  permissionId: Joi.number().required()
};
