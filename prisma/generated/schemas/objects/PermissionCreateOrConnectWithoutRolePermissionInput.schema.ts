// @ts-nocheck
import Joi from 'joi';
import { PermissionWhereUniqueInputSchemaObject } from './PermissionWhereUniqueInput.schema';
import { PermissionCreateWithoutRolePermissionInputSchemaObject } from './PermissionCreateWithoutRolePermissionInput.schema';
import { PermissionUncheckedCreateWithoutRolePermissionInputSchemaObject } from './PermissionUncheckedCreateWithoutRolePermissionInput.schema';

export const PermissionCreateOrConnectWithoutRolePermissionInputSchemaObject = {
  where: Joi.object().keys(PermissionWhereUniqueInputSchemaObject),
  create: Joi.alternatives().try(
    Joi.object().keys(PermissionCreateWithoutRolePermissionInputSchemaObject),
    Joi.object().keys(
      PermissionUncheckedCreateWithoutRolePermissionInputSchemaObject
    )
  )
};
