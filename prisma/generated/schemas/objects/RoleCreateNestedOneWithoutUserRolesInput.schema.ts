// @ts-nocheck
import Joi from 'joi';
import { RoleCreateWithoutUserRolesInputSchemaObject } from './RoleCreateWithoutUserRolesInput.schema';
import { RoleUncheckedCreateWithoutUserRolesInputSchemaObject } from './RoleUncheckedCreateWithoutUserRolesInput.schema';
import { RoleCreateOrConnectWithoutUserRolesInputSchemaObject } from './RoleCreateOrConnectWithoutUserRolesInput.schema';
import { RoleWhereUniqueInputSchemaObject } from './RoleWhereUniqueInput.schema';

export const RoleCreateNestedOneWithoutUserRolesInputSchemaObject = {
  create: Joi.alternatives().try(
    Joi.object().keys(RoleCreateWithoutUserRolesInputSchemaObject),
    Joi.object().keys(RoleUncheckedCreateWithoutUserRolesInputSchemaObject)
  ),
  connectOrCreate: Joi.object().keys(
    RoleCreateOrConnectWithoutUserRolesInputSchemaObject
  ),
  connect: Joi.object().keys(RoleWhereUniqueInputSchemaObject)
};
