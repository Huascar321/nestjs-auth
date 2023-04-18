// @ts-nocheck
import Joi from 'joi';
import { UserCreateWithoutUserRolesInputSchemaObject } from './UserCreateWithoutUserRolesInput.schema';
import { UserUncheckedCreateWithoutUserRolesInputSchemaObject } from './UserUncheckedCreateWithoutUserRolesInput.schema';
import { UserCreateOrConnectWithoutUserRolesInputSchemaObject } from './UserCreateOrConnectWithoutUserRolesInput.schema';
import { UserUpsertWithoutUserRolesInputSchemaObject } from './UserUpsertWithoutUserRolesInput.schema';
import { UserWhereUniqueInputSchemaObject } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutUserRolesInputSchemaObject } from './UserUpdateWithoutUserRolesInput.schema';
import { UserUncheckedUpdateWithoutUserRolesInputSchemaObject } from './UserUncheckedUpdateWithoutUserRolesInput.schema';

export const UserUpdateOneRequiredWithoutUserRolesNestedInputSchemaObject = {
  create: Joi.alternatives().try(
    Joi.object().keys(UserCreateWithoutUserRolesInputSchemaObject),
    Joi.object().keys(UserUncheckedCreateWithoutUserRolesInputSchemaObject)
  ),
  connectOrCreate: Joi.object().keys(
    UserCreateOrConnectWithoutUserRolesInputSchemaObject
  ),
  upsert: Joi.object().keys(UserUpsertWithoutUserRolesInputSchemaObject),
  connect: Joi.object().keys(UserWhereUniqueInputSchemaObject),
  update: Joi.alternatives().try(
    Joi.object().keys(UserUpdateWithoutUserRolesInputSchemaObject),
    Joi.object().keys(UserUncheckedUpdateWithoutUserRolesInputSchemaObject)
  )
};
