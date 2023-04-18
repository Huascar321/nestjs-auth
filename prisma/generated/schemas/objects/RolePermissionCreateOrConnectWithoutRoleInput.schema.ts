// @ts-nocheck
import Joi from 'joi';
import { RolePermissionWhereUniqueInputSchemaObject } from './RolePermissionWhereUniqueInput.schema';
import { RolePermissionCreateWithoutRoleInputSchemaObject } from './RolePermissionCreateWithoutRoleInput.schema';
import { RolePermissionUncheckedCreateWithoutRoleInputSchemaObject } from './RolePermissionUncheckedCreateWithoutRoleInput.schema';

export const RolePermissionCreateOrConnectWithoutRoleInputSchemaObject = {
  where: Joi.object().keys(RolePermissionWhereUniqueInputSchemaObject),
  create: Joi.alternatives().try(
    Joi.object().keys(RolePermissionCreateWithoutRoleInputSchemaObject),
    Joi.object().keys(RolePermissionUncheckedCreateWithoutRoleInputSchemaObject)
  )
};
