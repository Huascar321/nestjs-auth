// @ts-nocheck
import Joi from 'joi';
import { RolePermissionWhereUniqueInputSchemaObject } from './RolePermissionWhereUniqueInput.schema';
import { RolePermissionCreateWithoutPermissionInputSchemaObject } from './RolePermissionCreateWithoutPermissionInput.schema';
import { RolePermissionUncheckedCreateWithoutPermissionInputSchemaObject } from './RolePermissionUncheckedCreateWithoutPermissionInput.schema';

export const RolePermissionCreateOrConnectWithoutPermissionInputSchemaObject = {
  where: Joi.object().keys(RolePermissionWhereUniqueInputSchemaObject),
  create: Joi.alternatives().try(
    Joi.object().keys(RolePermissionCreateWithoutPermissionInputSchemaObject),
    Joi.object().keys(
      RolePermissionUncheckedCreateWithoutPermissionInputSchemaObject
    )
  )
};
