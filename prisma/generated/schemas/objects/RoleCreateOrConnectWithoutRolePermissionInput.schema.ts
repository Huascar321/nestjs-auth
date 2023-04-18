// @ts-nocheck
import Joi from 'joi';
import { RoleWhereUniqueInputSchemaObject } from './RoleWhereUniqueInput.schema';
import { RoleCreateWithoutRolePermissionInputSchemaObject } from './RoleCreateWithoutRolePermissionInput.schema';
import { RoleUncheckedCreateWithoutRolePermissionInputSchemaObject } from './RoleUncheckedCreateWithoutRolePermissionInput.schema';

export const RoleCreateOrConnectWithoutRolePermissionInputSchemaObject = {
  where: Joi.object().keys(RoleWhereUniqueInputSchemaObject),
  create: Joi.alternatives().try(
    Joi.object().keys(RoleCreateWithoutRolePermissionInputSchemaObject),
    Joi.object().keys(RoleUncheckedCreateWithoutRolePermissionInputSchemaObject)
  )
};
