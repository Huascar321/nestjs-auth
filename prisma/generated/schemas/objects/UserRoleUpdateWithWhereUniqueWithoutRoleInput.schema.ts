// @ts-nocheck
import Joi from 'joi';
import { UserRoleWhereUniqueInputSchemaObject } from './UserRoleWhereUniqueInput.schema';
import { UserRoleUpdateWithoutRoleInputSchemaObject } from './UserRoleUpdateWithoutRoleInput.schema';
import { UserRoleUncheckedUpdateWithoutRoleInputSchemaObject } from './UserRoleUncheckedUpdateWithoutRoleInput.schema';

export const UserRoleUpdateWithWhereUniqueWithoutRoleInputSchemaObject = {
  where: Joi.object().keys(UserRoleWhereUniqueInputSchemaObject),
  data: Joi.alternatives().try(
    Joi.object().keys(UserRoleUpdateWithoutRoleInputSchemaObject),
    Joi.object().keys(UserRoleUncheckedUpdateWithoutRoleInputSchemaObject)
  )
};
