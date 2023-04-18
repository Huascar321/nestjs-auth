import Joi from 'joi';

export const UserRoleScalarFieldEnumSchema = Joi.string().valid(
  ...['id', 'userId', 'roleId', 'creationDate', 'lastUpdateDate']
);
