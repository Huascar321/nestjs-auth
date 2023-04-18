// @ts-nocheck
import Joi from 'joi';
import { RolePermissionWhereUniqueInputSchemaObject } from './RolePermissionWhereUniqueInput.schema';
import { RolePermissionUpdateWithoutPermissionInputSchemaObject } from './RolePermissionUpdateWithoutPermissionInput.schema';
import { RolePermissionUncheckedUpdateWithoutPermissionInputSchemaObject } from './RolePermissionUncheckedUpdateWithoutPermissionInput.schema';
import { RolePermissionCreateWithoutPermissionInputSchemaObject } from './RolePermissionCreateWithoutPermissionInput.schema';
import { RolePermissionUncheckedCreateWithoutPermissionInputSchemaObject } from './RolePermissionUncheckedCreateWithoutPermissionInput.schema';

export const RolePermissionUpsertWithWhereUniqueWithoutPermissionInputSchemaObject =
  {
    where: Joi.object().keys(RolePermissionWhereUniqueInputSchemaObject),
    update: Joi.alternatives().try(
      Joi.object().keys(RolePermissionUpdateWithoutPermissionInputSchemaObject),
      Joi.object().keys(
        RolePermissionUncheckedUpdateWithoutPermissionInputSchemaObject
      )
    ),
    create: Joi.alternatives().try(
      Joi.object().keys(RolePermissionCreateWithoutPermissionInputSchemaObject),
      Joi.object().keys(
        RolePermissionUncheckedCreateWithoutPermissionInputSchemaObject
      )
    )
  };
