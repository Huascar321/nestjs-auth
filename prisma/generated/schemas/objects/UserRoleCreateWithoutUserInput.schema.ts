// @ts-nocheck
import Joi from 'joi';
import { RoleCreateNestedOneWithoutUserRolesInputSchemaObject } from './RoleCreateNestedOneWithoutUserRolesInput.schema';

export const UserRoleCreateWithoutUserInputSchemaObject = {
  role: Joi.object().keys(RoleCreateNestedOneWithoutUserRolesInputSchemaObject)
};
