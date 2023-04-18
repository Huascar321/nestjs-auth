// @ts-nocheck
import Joi from 'joi';
import { RoleCreateNestedOneWithoutRolePermissionInputSchemaObject } from './RoleCreateNestedOneWithoutRolePermissionInput.schema';

export const RolePermissionCreateWithoutPermissionInputSchemaObject = {
  role: Joi.object().keys(
    RoleCreateNestedOneWithoutRolePermissionInputSchemaObject
  )
};
