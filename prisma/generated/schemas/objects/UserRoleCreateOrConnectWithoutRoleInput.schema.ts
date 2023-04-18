// @ts-nocheck
import Joi from 'joi';
import { UserRoleWhereUniqueInputSchemaObject } from './UserRoleWhereUniqueInput.schema';
import { UserRoleCreateWithoutRoleInputSchemaObject } from './UserRoleCreateWithoutRoleInput.schema';
import { UserRoleUncheckedCreateWithoutRoleInputSchemaObject } from './UserRoleUncheckedCreateWithoutRoleInput.schema';

export const UserRoleCreateOrConnectWithoutRoleInputSchemaObject = {
  where: Joi.object().keys(UserRoleWhereUniqueInputSchemaObject),
  create: Joi.alternatives().try(
    Joi.object().keys(UserRoleCreateWithoutRoleInputSchemaObject),
    Joi.object().keys(UserRoleUncheckedCreateWithoutRoleInputSchemaObject)
  )
};
