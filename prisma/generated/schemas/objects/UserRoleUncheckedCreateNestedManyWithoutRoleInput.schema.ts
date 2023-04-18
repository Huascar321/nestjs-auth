// @ts-nocheck
import Joi from 'joi';
import { UserRoleCreateWithoutRoleInputSchemaObject } from './UserRoleCreateWithoutRoleInput.schema';
import { UserRoleUncheckedCreateWithoutRoleInputSchemaObject } from './UserRoleUncheckedCreateWithoutRoleInput.schema';
import { UserRoleCreateOrConnectWithoutRoleInputSchemaObject } from './UserRoleCreateOrConnectWithoutRoleInput.schema';
import { UserRoleCreateManyRoleInputEnvelopeSchemaObject } from './UserRoleCreateManyRoleInputEnvelope.schema';
import { UserRoleWhereUniqueInputSchemaObject } from './UserRoleWhereUniqueInput.schema';

export const UserRoleUncheckedCreateNestedManyWithoutRoleInputSchemaObject = {
  create: Joi.alternatives().try(
    Joi.object().keys(UserRoleCreateWithoutRoleInputSchemaObject),
    Joi.array().items(
      Joi.object().keys(UserRoleCreateWithoutRoleInputSchemaObject)
    ),
    Joi.object().keys(UserRoleUncheckedCreateWithoutRoleInputSchemaObject),
    Joi.array().items(
      Joi.object().keys(UserRoleUncheckedCreateWithoutRoleInputSchemaObject)
    )
  ),
  connectOrCreate: Joi.alternatives().try(
    Joi.object().keys(UserRoleCreateOrConnectWithoutRoleInputSchemaObject),
    Joi.array().items(
      Joi.object().keys(UserRoleCreateOrConnectWithoutRoleInputSchemaObject)
    )
  ),
  createMany: Joi.object().keys(
    UserRoleCreateManyRoleInputEnvelopeSchemaObject
  ),
  connect: Joi.alternatives().try(
    Joi.object().keys(UserRoleWhereUniqueInputSchemaObject),
    Joi.array().items(Joi.object().keys(UserRoleWhereUniqueInputSchemaObject))
  )
};
