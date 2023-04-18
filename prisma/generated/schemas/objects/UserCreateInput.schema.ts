// @ts-nocheck
import Joi from 'joi';
import { UserRoleCreateNestedManyWithoutUserInputSchemaObject } from './UserRoleCreateNestedManyWithoutUserInput.schema';

export const UserCreateInputSchemaObject = {
  username: Joi.string().required(),
  password: Joi.string().required(),
  userRoles: Joi.object().keys(
    UserRoleCreateNestedManyWithoutUserInputSchemaObject
  )
};
