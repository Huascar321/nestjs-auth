// @ts-nocheck
import Joi from 'joi';
import { UserRoleUncheckedCreateNestedManyWithoutUserInputSchemaObject } from './UserRoleUncheckedCreateNestedManyWithoutUserInput.schema';

export const UserUncheckedCreateInputSchemaObject = {
  id: Joi.number(),
  username: Joi.string().required(),
  password: Joi.string().required(),
  userRoles: Joi.object().keys(
    UserRoleUncheckedCreateNestedManyWithoutUserInputSchemaObject
  )
};
