import Joi from 'joi';

export const RolePermissionSchemaObject = {
  permissionCode: Joi.number().required()
};
