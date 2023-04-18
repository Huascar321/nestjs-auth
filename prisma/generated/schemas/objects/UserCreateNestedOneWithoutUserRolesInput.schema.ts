// @ts-nocheck
import Joi from 'joi';
import { UserCreateWithoutUserRolesInputSchemaObject } from './UserCreateWithoutUserRolesInput.schema';
import { UserUncheckedCreateWithoutUserRolesInputSchemaObject } from './UserUncheckedCreateWithoutUserRolesInput.schema';
import { UserCreateOrConnectWithoutUserRolesInputSchemaObject } from './UserCreateOrConnectWithoutUserRolesInput.schema';
import { UserWhereUniqueInputSchemaObject } from './UserWhereUniqueInput.schema';

export const UserCreateNestedOneWithoutUserRolesInputSchemaObject = {
  create: Joi.alternatives().try(
    Joi.object().keys(UserCreateWithoutUserRolesInputSchemaObject),
    Joi.object().keys(UserUncheckedCreateWithoutUserRolesInputSchemaObject)
  ),
  connectOrCreate: Joi.object().keys(
    UserCreateOrConnectWithoutUserRolesInputSchemaObject
  ),
  connect: Joi.object().keys(UserWhereUniqueInputSchemaObject)
};
