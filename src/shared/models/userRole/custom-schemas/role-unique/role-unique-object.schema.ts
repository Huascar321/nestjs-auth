import Joi from 'joi';

export const RoleUniqueSchemaObject = {
  roleUnique: Joi.alternatives(Joi.string(), Joi.number()).required()
};
