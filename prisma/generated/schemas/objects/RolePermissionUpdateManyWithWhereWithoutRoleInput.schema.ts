// @ts-nocheck
import Joi from 'joi';
import { RolePermissionScalarWhereInputSchemaObject } from './RolePermissionScalarWhereInput.schema';
import { RolePermissionUpdateManyMutationInputSchemaObject } from './RolePermissionUpdateManyMutationInput.schema';
import { RolePermissionUncheckedUpdateManyWithoutRolePermissionInputSchemaObject } from './RolePermissionUncheckedUpdateManyWithoutRolePermissionInput.schema';

export const RolePermissionUpdateManyWithWhereWithoutRoleInputSchemaObject = {
  where: Joi.object().keys(RolePermissionScalarWhereInputSchemaObject),
  data: Joi.alternatives().try(
    Joi.object().keys(RolePermissionUpdateManyMutationInputSchemaObject),
    Joi.object().keys(
      RolePermissionUncheckedUpdateManyWithoutRolePermissionInputSchemaObject
    )
  )
};
