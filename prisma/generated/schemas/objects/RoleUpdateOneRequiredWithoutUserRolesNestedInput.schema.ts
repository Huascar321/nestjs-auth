// @ts-nocheck
import Joi from 'joi';
import { RoleCreateWithoutUserRolesInputSchemaObject } from './RoleCreateWithoutUserRolesInput.schema';
import { RoleUncheckedCreateWithoutUserRolesInputSchemaObject } from './RoleUncheckedCreateWithoutUserRolesInput.schema';
import { RoleCreateOrConnectWithoutUserRolesInputSchemaObject } from './RoleCreateOrConnectWithoutUserRolesInput.schema';
import { RoleUpsertWithoutUserRolesInputSchemaObject } from './RoleUpsertWithoutUserRolesInput.schema';
import { RoleWhereUniqueInputSchemaObject } from './RoleWhereUniqueInput.schema';
import { RoleUpdateWithoutUserRolesInputSchemaObject } from './RoleUpdateWithoutUserRolesInput.schema';
import { RoleUncheckedUpdateWithoutUserRolesInputSchemaObject } from './RoleUncheckedUpdateWithoutUserRolesInput.schema';

export const RoleUpdateOneRequiredWithoutUserRolesNestedInputSchemaObject = {
  create: Joi.alternatives().try(
    Joi.object().keys(RoleCreateWithoutUserRolesInputSchemaObject),
    Joi.object().keys(RoleUncheckedCreateWithoutUserRolesInputSchemaObject)
  ),
  connectOrCreate: Joi.object().keys(
    RoleCreateOrConnectWithoutUserRolesInputSchemaObject
  ),
  upsert: Joi.object().keys(RoleUpsertWithoutUserRolesInputSchemaObject),
  connect: Joi.object().keys(RoleWhereUniqueInputSchemaObject),
  update: Joi.alternatives().try(
    Joi.object().keys(RoleUpdateWithoutUserRolesInputSchemaObject),
    Joi.object().keys(RoleUncheckedUpdateWithoutUserRolesInputSchemaObject)
  )
};
