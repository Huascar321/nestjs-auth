// @ts-nocheck
import Joi from 'joi';
import { UserRoleWhereUniqueInputSchemaObject } from './UserRoleWhereUniqueInput.schema';
import { UserRoleUpdateWithoutUserInputSchemaObject } from './UserRoleUpdateWithoutUserInput.schema';
import { UserRoleUncheckedUpdateWithoutUserInputSchemaObject } from './UserRoleUncheckedUpdateWithoutUserInput.schema';

export const UserRoleUpdateWithWhereUniqueWithoutUserInputSchemaObject = {
  where: Joi.object().keys(UserRoleWhereUniqueInputSchemaObject),
  data: Joi.alternatives().try(
    Joi.object().keys(UserRoleUpdateWithoutUserInputSchemaObject),
    Joi.object().keys(UserRoleUncheckedUpdateWithoutUserInputSchemaObject)
  )
};
