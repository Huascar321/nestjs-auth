// @ts-nocheck
import Joi from 'joi';
import { RoleUpdateWithoutRolePermissionInputSchemaObject } from './RoleUpdateWithoutRolePermissionInput.schema';
import { RoleUncheckedUpdateWithoutRolePermissionInputSchemaObject } from './RoleUncheckedUpdateWithoutRolePermissionInput.schema';
import { RoleCreateWithoutRolePermissionInputSchemaObject } from './RoleCreateWithoutRolePermissionInput.schema';
import { RoleUncheckedCreateWithoutRolePermissionInputSchemaObject } from './RoleUncheckedCreateWithoutRolePermissionInput.schema';

export const RoleUpsertWithoutRolePermissionInputSchemaObject = {
  update: Joi.alternatives().try(
    Joi.object().keys(RoleUpdateWithoutRolePermissionInputSchemaObject),
    Joi.object().keys(RoleUncheckedUpdateWithoutRolePermissionInputSchemaObject)
  ),
  create: Joi.alternatives().try(
    Joi.object().keys(RoleCreateWithoutRolePermissionInputSchemaObject),
    Joi.object().keys(RoleUncheckedCreateWithoutRolePermissionInputSchemaObject)
  )
};
