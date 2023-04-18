// @ts-nocheck
import Joi from 'joi';
import { UserRoleCreateWithoutUserInputSchemaObject } from './UserRoleCreateWithoutUserInput.schema';
import { UserRoleUncheckedCreateWithoutUserInputSchemaObject } from './UserRoleUncheckedCreateWithoutUserInput.schema';
import { UserRoleCreateOrConnectWithoutUserInputSchemaObject } from './UserRoleCreateOrConnectWithoutUserInput.schema';
import { UserRoleCreateManyUserInputEnvelopeSchemaObject } from './UserRoleCreateManyUserInputEnvelope.schema';
import { UserRoleWhereUniqueInputSchemaObject } from './UserRoleWhereUniqueInput.schema';

export const UserRoleUncheckedCreateNestedManyWithoutUserInputSchemaObject = {
  create: Joi.alternatives().try(
    Joi.object().keys(UserRoleCreateWithoutUserInputSchemaObject),
    Joi.array().items(
      Joi.object().keys(UserRoleCreateWithoutUserInputSchemaObject)
    ),
    Joi.object().keys(UserRoleUncheckedCreateWithoutUserInputSchemaObject),
    Joi.array().items(
      Joi.object().keys(UserRoleUncheckedCreateWithoutUserInputSchemaObject)
    )
  ),
  connectOrCreate: Joi.alternatives().try(
    Joi.object().keys(UserRoleCreateOrConnectWithoutUserInputSchemaObject),
    Joi.array().items(
      Joi.object().keys(UserRoleCreateOrConnectWithoutUserInputSchemaObject)
    )
  ),
  createMany: Joi.object().keys(
    UserRoleCreateManyUserInputEnvelopeSchemaObject
  ),
  connect: Joi.alternatives().try(
    Joi.object().keys(UserRoleWhereUniqueInputSchemaObject),
    Joi.array().items(Joi.object().keys(UserRoleWhereUniqueInputSchemaObject))
  )
};
