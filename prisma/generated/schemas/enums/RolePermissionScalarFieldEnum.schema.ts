import Joi from 'joi';

export const RolePermissionScalarFieldEnumSchema = Joi.string().valid(
  ...['id', 'roleId', 'permissionId', 'creationDate', 'lastUpdateDate']
);
