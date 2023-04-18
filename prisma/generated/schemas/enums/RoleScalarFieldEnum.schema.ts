import Joi from 'joi';

export const RoleScalarFieldEnumSchema = Joi.string().valid(
  ...['id', 'name', 'description', 'creationDate', 'lastUpdateDate']
);
