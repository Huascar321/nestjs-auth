// @ts-nocheck
import Joi from 'joi';
import { RoleCreateWithoutRolePermissionInputSchemaObject } from './RoleCreateWithoutRolePermissionInput.schema';
import { RoleUncheckedCreateWithoutRolePermissionInputSchemaObject } from './RoleUncheckedCreateWithoutRolePermissionInput.schema';
import { RoleCreateOrConnectWithoutRolePermissionInputSchemaObject } from './RoleCreateOrConnectWithoutRolePermissionInput.schema';
import { RoleUpsertWithoutRolePermissionInputSchemaObject } from './RoleUpsertWithoutRolePermissionInput.schema';
import { RoleWhereUniqueInputSchemaObject } from './RoleWhereUniqueInput.schema';
import { RoleUpdateWithoutRolePermissionInputSchemaObject } from './RoleUpdateWithoutRolePermissionInput.schema';
import { RoleUncheckedUpdateWithoutRolePermissionInputSchemaObject } from './RoleUncheckedUpdateWithoutRolePermissionInput.schema';

export const RoleUpdateOneRequiredWithoutRolePermissionNestedInputSchemaObject =
  {
    create: Joi.alternatives().try(
      Joi.object().keys(RoleCreateWithoutRolePermissionInputSchemaObject),
      Joi.object().keys(
        RoleUncheckedCreateWithoutRolePermissionInputSchemaObject
      )
    ),
    connectOrCreate: Joi.object().keys(
      RoleCreateOrConnectWithoutRolePermissionInputSchemaObject
    ),
    upsert: Joi.object().keys(RoleUpsertWithoutRolePermissionInputSchemaObject),
    connect: Joi.object().keys(RoleWhereUniqueInputSchemaObject),
    update: Joi.alternatives().try(
      Joi.object().keys(RoleUpdateWithoutRolePermissionInputSchemaObject),
      Joi.object().keys(
        RoleUncheckedUpdateWithoutRolePermissionInputSchemaObject
      )
    )
  };
