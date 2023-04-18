import Joi from 'joi';

export const UserScalarFieldEnumSchema = Joi.string().valid(
  ...['id', 'username', 'password', 'creationDate', 'lastUpdateDate']
);
