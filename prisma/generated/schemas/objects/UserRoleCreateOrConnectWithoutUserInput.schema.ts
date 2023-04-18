// @ts-nocheck
import Joi from 'joi';
import { UserRoleWhereUniqueInputSchemaObject } from './UserRoleWhereUniqueInput.schema';
import { UserRoleCreateWithoutUserInputSchemaObject } from './UserRoleCreateWithoutUserInput.schema';
import { UserRoleUncheckedCreateWithoutUserInputSchemaObject } from './UserRoleUncheckedCreateWithoutUserInput.schema';

export const UserRoleCreateOrConnectWithoutUserInputSchemaObject = {
  where: Joi.object().keys(UserRoleWhereUniqueInputSchemaObject),
  create: Joi.alternatives().try(
    Joi.object().keys(UserRoleCreateWithoutUserInputSchemaObject),
    Joi.object().keys(UserRoleUncheckedCreateWithoutUserInputSchemaObject)
  )
};
