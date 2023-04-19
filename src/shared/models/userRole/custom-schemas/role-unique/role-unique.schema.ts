import Joi from 'joi';

export const RoleUniqueSchema = Joi.object()
  .keys({ data: Joi.object().keys() })
  .required();
