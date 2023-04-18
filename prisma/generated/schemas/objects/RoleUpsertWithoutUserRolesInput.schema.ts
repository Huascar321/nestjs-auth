// @ts-nocheck
import Joi from 'joi';
import { RoleUpdateWithoutUserRolesInputSchemaObject } from './RoleUpdateWithoutUserRolesInput.schema';
import { RoleUncheckedUpdateWithoutUserRolesInputSchemaObject } from './RoleUncheckedUpdateWithoutUserRolesInput.schema';
import { RoleCreateWithoutUserRolesInputSchemaObject } from './RoleCreateWithoutUserRolesInput.schema';
import { RoleUncheckedCreateWithoutUserRolesInputSchemaObject } from './RoleUncheckedCreateWithoutUserRolesInput.schema';

export const RoleUpsertWithoutUserRolesInputSchemaObject = {
  update: Joi.alternatives().try(
    Joi.object().keys(RoleUpdateWithoutUserRolesInputSchemaObject),
    Joi.object().keys(RoleUncheckedUpdateWithoutUserRolesInputSchemaObject)
  ),
  create: Joi.alternatives().try(
    Joi.object().keys(RoleCreateWithoutUserRolesInputSchemaObject),
    Joi.object().keys(RoleUncheckedCreateWithoutUserRolesInputSchemaObject)
  )
};
