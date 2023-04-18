// @ts-nocheck
import Joi from 'joi';
import { RoleCreateNestedOneWithoutRolePermissionInputSchemaObject } from './RoleCreateNestedOneWithoutRolePermissionInput.schema';
import { PermissionCreateNestedOneWithoutRolePermissionInputSchemaObject } from './PermissionCreateNestedOneWithoutRolePermissionInput.schema';

export const RolePermissionCreateInputSchemaObject = {
  role: Joi.object().keys(
    RoleCreateNestedOneWithoutRolePermissionInputSchemaObject
  ),
  permission: Joi.object().keys(
    PermissionCreateNestedOneWithoutRolePermissionInputSchemaObject
  )
};
