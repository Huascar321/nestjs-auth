// @ts-nocheck
import Joi from 'joi';

export const UserRoleUncheckedCreateWithoutUserInputSchemaObject = {
  id: Joi.number(),
  roleId: Joi.number().required()
};
