// @ts-nocheck
import Joi from 'joi';
import { PermissionCreateWithoutRolePermissionInputSchemaObject } from './PermissionCreateWithoutRolePermissionInput.schema';
import { PermissionUncheckedCreateWithoutRolePermissionInputSchemaObject } from './PermissionUncheckedCreateWithoutRolePermissionInput.schema';
import { PermissionCreateOrConnectWithoutRolePermissionInputSchemaObject } from './PermissionCreateOrConnectWithoutRolePermissionInput.schema';
import { PermissionWhereUniqueInputSchemaObject } from './PermissionWhereUniqueInput.schema';

export const PermissionCreateNestedOneWithoutRolePermissionInputSchemaObject = {
  create: Joi.alternatives().try(
    Joi.object().keys(PermissionCreateWithoutRolePermissionInputSchemaObject),
    Joi.object().keys(
      PermissionUncheckedCreateWithoutRolePermissionInputSchemaObject
    )
  ),
  connectOrCreate: Joi.object().keys(
    PermissionCreateOrConnectWithoutRolePermissionInputSchemaObject
  ),
  connect: Joi.object().keys(PermissionWhereUniqueInputSchemaObject)
};
