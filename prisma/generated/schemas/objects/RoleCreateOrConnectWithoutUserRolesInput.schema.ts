// @ts-nocheck
import Joi from 'joi';
import { RoleWhereUniqueInputSchemaObject } from './RoleWhereUniqueInput.schema';
import { RoleCreateWithoutUserRolesInputSchemaObject } from './RoleCreateWithoutUserRolesInput.schema';
import { RoleUncheckedCreateWithoutUserRolesInputSchemaObject } from './RoleUncheckedCreateWithoutUserRolesInput.schema';

export const RoleCreateOrConnectWithoutUserRolesInputSchemaObject = {
  where: Joi.object().keys(RoleWhereUniqueInputSchemaObject),
  create: Joi.alternatives().try(
    Joi.object().keys(RoleCreateWithoutUserRolesInputSchemaObject),
    Joi.object().keys(RoleUncheckedCreateWithoutUserRolesInputSchemaObject)
  )
};
