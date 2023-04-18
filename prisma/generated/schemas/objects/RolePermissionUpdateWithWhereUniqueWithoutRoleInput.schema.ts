// @ts-nocheck
import Joi from 'joi';
import { RolePermissionWhereUniqueInputSchemaObject } from './RolePermissionWhereUniqueInput.schema';
import { RolePermissionUpdateWithoutRoleInputSchemaObject } from './RolePermissionUpdateWithoutRoleInput.schema';
import { RolePermissionUncheckedUpdateWithoutRoleInputSchemaObject } from './RolePermissionUncheckedUpdateWithoutRoleInput.schema';

export const RolePermissionUpdateWithWhereUniqueWithoutRoleInputSchemaObject = {
  where: Joi.object().keys(RolePermissionWhereUniqueInputSchemaObject),
  data: Joi.alternatives().try(
    Joi.object().keys(RolePermissionUpdateWithoutRoleInputSchemaObject),
    Joi.object().keys(RolePermissionUncheckedUpdateWithoutRoleInputSchemaObject)
  )
};
