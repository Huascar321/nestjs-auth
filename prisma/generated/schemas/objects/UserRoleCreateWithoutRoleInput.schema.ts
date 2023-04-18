// @ts-nocheck
import Joi from 'joi';
import { UserCreateNestedOneWithoutUserRolesInputSchemaObject } from './UserCreateNestedOneWithoutUserRolesInput.schema';

export const UserRoleCreateWithoutRoleInputSchemaObject = {
  user: Joi.object().keys(UserCreateNestedOneWithoutUserRolesInputSchemaObject)
};
