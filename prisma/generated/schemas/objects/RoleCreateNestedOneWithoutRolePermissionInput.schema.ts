// @ts-nocheck
import Joi from 'joi';
import { RoleCreateWithoutRolePermissionInputSchemaObject } from './RoleCreateWithoutRolePermissionInput.schema';
import { RoleUncheckedCreateWithoutRolePermissionInputSchemaObject } from './RoleUncheckedCreateWithoutRolePermissionInput.schema';
import { RoleCreateOrConnectWithoutRolePermissionInputSchemaObject } from './RoleCreateOrConnectWithoutRolePermissionInput.schema';
import { RoleWhereUniqueInputSchemaObject } from './RoleWhereUniqueInput.schema';

export const RoleCreateNestedOneWithoutRolePermissionInputSchemaObject = {
  create: Joi.alternatives().try(
    Joi.object().keys(RoleCreateWithoutRolePermissionInputSchemaObject),
    Joi.object().keys(RoleUncheckedCreateWithoutRolePermissionInputSchemaObject)
  ),
  connectOrCreate: Joi.object().keys(
    RoleCreateOrConnectWithoutRolePermissionInputSchemaObject
  ),
  connect: Joi.object().keys(RoleWhereUniqueInputSchemaObject)
};
