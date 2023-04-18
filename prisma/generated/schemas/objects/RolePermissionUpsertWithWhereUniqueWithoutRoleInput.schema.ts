// @ts-nocheck
import Joi from 'joi';
import { RolePermissionWhereUniqueInputSchemaObject } from './RolePermissionWhereUniqueInput.schema';
import { RolePermissionUpdateWithoutRoleInputSchemaObject } from './RolePermissionUpdateWithoutRoleInput.schema';
import { RolePermissionUncheckedUpdateWithoutRoleInputSchemaObject } from './RolePermissionUncheckedUpdateWithoutRoleInput.schema';
import { RolePermissionCreateWithoutRoleInputSchemaObject } from './RolePermissionCreateWithoutRoleInput.schema';
import { RolePermissionUncheckedCreateWithoutRoleInputSchemaObject } from './RolePermissionUncheckedCreateWithoutRoleInput.schema';

export const RolePermissionUpsertWithWhereUniqueWithoutRoleInputSchemaObject = {
  where: Joi.object().keys(RolePermissionWhereUniqueInputSchemaObject),
  update: Joi.alternatives().try(
    Joi.object().keys(RolePermissionUpdateWithoutRoleInputSchemaObject),
    Joi.object().keys(RolePermissionUncheckedUpdateWithoutRoleInputSchemaObject)
  ),
  create: Joi.alternatives().try(
    Joi.object().keys(RolePermissionCreateWithoutRoleInputSchemaObject),
    Joi.object().keys(RolePermissionUncheckedCreateWithoutRoleInputSchemaObject)
  )
};
