// @ts-nocheck
import Joi from 'joi';
import { UserWhereUniqueInputSchemaObject } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutUserRolesInputSchemaObject } from './UserCreateWithoutUserRolesInput.schema';
import { UserUncheckedCreateWithoutUserRolesInputSchemaObject } from './UserUncheckedCreateWithoutUserRolesInput.schema';

export const UserCreateOrConnectWithoutUserRolesInputSchemaObject = {
  where: Joi.object().keys(UserWhereUniqueInputSchemaObject),
  create: Joi.alternatives().try(
    Joi.object().keys(UserCreateWithoutUserRolesInputSchemaObject),
    Joi.object().keys(UserUncheckedCreateWithoutUserRolesInputSchemaObject)
  )
};
