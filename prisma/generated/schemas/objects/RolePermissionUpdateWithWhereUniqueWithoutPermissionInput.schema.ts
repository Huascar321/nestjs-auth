// @ts-nocheck
import Joi from 'joi';
import { RolePermissionWhereUniqueInputSchemaObject } from './RolePermissionWhereUniqueInput.schema';
import { RolePermissionUpdateWithoutPermissionInputSchemaObject } from './RolePermissionUpdateWithoutPermissionInput.schema';
import { RolePermissionUncheckedUpdateWithoutPermissionInputSchemaObject } from './RolePermissionUncheckedUpdateWithoutPermissionInput.schema';

export const RolePermissionUpdateWithWhereUniqueWithoutPermissionInputSchemaObject =
  {
    where: Joi.object().keys(RolePermissionWhereUniqueInputSchemaObject),
    data: Joi.alternatives().try(
      Joi.object().keys(RolePermissionUpdateWithoutPermissionInputSchemaObject),
      Joi.object().keys(
        RolePermissionUncheckedUpdateWithoutPermissionInputSchemaObject
      )
    )
  };
