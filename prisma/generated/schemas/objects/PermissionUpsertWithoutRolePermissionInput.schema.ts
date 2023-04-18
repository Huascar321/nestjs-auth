// @ts-nocheck
import Joi from 'joi';
import { PermissionUpdateWithoutRolePermissionInputSchemaObject } from './PermissionUpdateWithoutRolePermissionInput.schema';
import { PermissionUncheckedUpdateWithoutRolePermissionInputSchemaObject } from './PermissionUncheckedUpdateWithoutRolePermissionInput.schema';
import { PermissionCreateWithoutRolePermissionInputSchemaObject } from './PermissionCreateWithoutRolePermissionInput.schema';
import { PermissionUncheckedCreateWithoutRolePermissionInputSchemaObject } from './PermissionUncheckedCreateWithoutRolePermissionInput.schema';

export const PermissionUpsertWithoutRolePermissionInputSchemaObject = {
  update: Joi.alternatives().try(
    Joi.object().keys(PermissionUpdateWithoutRolePermissionInputSchemaObject),
    Joi.object().keys(
      PermissionUncheckedUpdateWithoutRolePermissionInputSchemaObject
    )
  ),
  create: Joi.alternatives().try(
    Joi.object().keys(PermissionCreateWithoutRolePermissionInputSchemaObject),
    Joi.object().keys(
      PermissionUncheckedCreateWithoutRolePermissionInputSchemaObject
    )
  )
};
