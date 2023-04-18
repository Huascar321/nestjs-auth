// @ts-nocheck
import Joi from 'joi';
import { UserRoleWhereUniqueInputSchemaObject } from './UserRoleWhereUniqueInput.schema';
import { UserRoleUpdateWithoutRoleInputSchemaObject } from './UserRoleUpdateWithoutRoleInput.schema';
import { UserRoleUncheckedUpdateWithoutRoleInputSchemaObject } from './UserRoleUncheckedUpdateWithoutRoleInput.schema';
import { UserRoleCreateWithoutRoleInputSchemaObject } from './UserRoleCreateWithoutRoleInput.schema';
import { UserRoleUncheckedCreateWithoutRoleInputSchemaObject } from './UserRoleUncheckedCreateWithoutRoleInput.schema';

export const UserRoleUpsertWithWhereUniqueWithoutRoleInputSchemaObject = {
  where: Joi.object().keys(UserRoleWhereUniqueInputSchemaObject),
  update: Joi.alternatives().try(
    Joi.object().keys(UserRoleUpdateWithoutRoleInputSchemaObject),
    Joi.object().keys(UserRoleUncheckedUpdateWithoutRoleInputSchemaObject)
  ),
  create: Joi.alternatives().try(
    Joi.object().keys(UserRoleCreateWithoutRoleInputSchemaObject),
    Joi.object().keys(UserRoleUncheckedCreateWithoutRoleInputSchemaObject)
  )
};
