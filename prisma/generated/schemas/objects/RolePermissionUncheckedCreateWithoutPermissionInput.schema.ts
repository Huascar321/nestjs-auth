// @ts-nocheck
import Joi from 'joi';

export const RolePermissionUncheckedCreateWithoutPermissionInputSchemaObject = {
  id: Joi.number(),
  roleId: Joi.number().required()
};
