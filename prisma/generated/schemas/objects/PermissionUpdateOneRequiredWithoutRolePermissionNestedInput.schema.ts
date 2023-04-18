// @ts-nocheck
import Joi from 'joi';
import { PermissionCreateWithoutRolePermissionInputSchemaObject } from './PermissionCreateWithoutRolePermissionInput.schema';
import { PermissionUncheckedCreateWithoutRolePermissionInputSchemaObject } from './PermissionUncheckedCreateWithoutRolePermissionInput.schema';
import { PermissionCreateOrConnectWithoutRolePermissionInputSchemaObject } from './PermissionCreateOrConnectWithoutRolePermissionInput.schema';
import { PermissionUpsertWithoutRolePermissionInputSchemaObject } from './PermissionUpsertWithoutRolePermissionInput.schema';
import { PermissionWhereUniqueInputSchemaObject } from './PermissionWhereUniqueInput.schema';
import { PermissionUpdateWithoutRolePermissionInputSchemaObject } from './PermissionUpdateWithoutRolePermissionInput.schema';
import { PermissionUncheckedUpdateWithoutRolePermissionInputSchemaObject } from './PermissionUncheckedUpdateWithoutRolePermissionInput.schema';

export const PermissionUpdateOneRequiredWithoutRolePermissionNestedInputSchemaObject =
  {
    create: Joi.alternatives().try(
      Joi.object().keys(PermissionCreateWithoutRolePermissionInputSchemaObject),
      Joi.object().keys(
        PermissionUncheckedCreateWithoutRolePermissionInputSchemaObject
      )
    ),
    connectOrCreate: Joi.object().keys(
      PermissionCreateOrConnectWithoutRolePermissionInputSchemaObject
    ),
    upsert: Joi.object().keys(
      PermissionUpsertWithoutRolePermissionInputSchemaObject
    ),
    connect: Joi.object().keys(PermissionWhereUniqueInputSchemaObject),
    update: Joi.alternatives().try(
      Joi.object().keys(PermissionUpdateWithoutRolePermissionInputSchemaObject),
      Joi.object().keys(
        PermissionUncheckedUpdateWithoutRolePermissionInputSchemaObject
      )
    )
  };
