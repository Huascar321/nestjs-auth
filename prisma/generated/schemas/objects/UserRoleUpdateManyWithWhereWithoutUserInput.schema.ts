// @ts-nocheck
import Joi from 'joi';
import { UserRoleScalarWhereInputSchemaObject } from './UserRoleScalarWhereInput.schema';
import { UserRoleUpdateManyMutationInputSchemaObject } from './UserRoleUpdateManyMutationInput.schema';
import { UserRoleUncheckedUpdateManyWithoutUserRolesInputSchemaObject } from './UserRoleUncheckedUpdateManyWithoutUserRolesInput.schema';

export const UserRoleUpdateManyWithWhereWithoutUserInputSchemaObject = {
  where: Joi.object().keys(UserRoleScalarWhereInputSchemaObject),
  data: Joi.alternatives().try(
    Joi.object().keys(UserRoleUpdateManyMutationInputSchemaObject),
    Joi.object().keys(
      UserRoleUncheckedUpdateManyWithoutUserRolesInputSchemaObject
    )
  )
};
