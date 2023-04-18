import Joi from 'joi';

export const PermissionScalarFieldEnumSchema = Joi.string().valid(
  ...['id', 'name', 'description', 'code', 'creationDate', 'lastUpdateDate']
);
