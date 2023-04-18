// @ts-nocheck
import Joi from 'joi';
import { PermissionCreateNestedOneWithoutRolePermissionInputSchemaObject } from './PermissionCreateNestedOneWithoutRolePermissionInput.schema';

export const RolePermissionCreateWithoutRoleInputSchemaObject = {
  permission: Joi.object().keys(
    PermissionCreateNestedOneWithoutRolePermissionInputSchemaObject
  )
};
