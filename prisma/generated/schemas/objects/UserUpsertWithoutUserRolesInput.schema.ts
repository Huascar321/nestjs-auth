// @ts-nocheck
import Joi from 'joi';
import { UserUpdateWithoutUserRolesInputSchemaObject } from './UserUpdateWithoutUserRolesInput.schema';
import { UserUncheckedUpdateWithoutUserRolesInputSchemaObject } from './UserUncheckedUpdateWithoutUserRolesInput.schema';
import { UserCreateWithoutUserRolesInputSchemaObject } from './UserCreateWithoutUserRolesInput.schema';
import { UserUncheckedCreateWithoutUserRolesInputSchemaObject } from './UserUncheckedCreateWithoutUserRolesInput.schema';

export const UserUpsertWithoutUserRolesInputSchemaObject = {
  update: Joi.alternatives().try(
    Joi.object().keys(UserUpdateWithoutUserRolesInputSchemaObject),
    Joi.object().keys(UserUncheckedUpdateWithoutUserRolesInputSchemaObject)
  ),
  create: Joi.alternatives().try(
    Joi.object().keys(UserCreateWithoutUserRolesInputSchemaObject),
    Joi.object().keys(UserUncheckedCreateWithoutUserRolesInputSchemaObject)
  )
};
