// @ts-nocheck
import Joi from 'joi';
import { UserRoleWhereUniqueInputSchemaObject } from './UserRoleWhereUniqueInput.schema';
import { UserRoleUpdateWithoutUserInputSchemaObject } from './UserRoleUpdateWithoutUserInput.schema';
import { UserRoleUncheckedUpdateWithoutUserInputSchemaObject } from './UserRoleUncheckedUpdateWithoutUserInput.schema';
import { UserRoleCreateWithoutUserInputSchemaObject } from './UserRoleCreateWithoutUserInput.schema';
import { UserRoleUncheckedCreateWithoutUserInputSchemaObject } from './UserRoleUncheckedCreateWithoutUserInput.schema';

export const UserRoleUpsertWithWhereUniqueWithoutUserInputSchemaObject = {
  where: Joi.object().keys(UserRoleWhereUniqueInputSchemaObject),
  update: Joi.alternatives().try(
    Joi.object().keys(UserRoleUpdateWithoutUserInputSchemaObject),
    Joi.object().keys(UserRoleUncheckedUpdateWithoutUserInputSchemaObject)
  ),
  create: Joi.alternatives().try(
    Joi.object().keys(UserRoleCreateWithoutUserInputSchemaObject),
    Joi.object().keys(UserRoleUncheckedCreateWithoutUserInputSchemaObject)
  )
};
