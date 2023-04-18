// @ts-nocheck
import Joi from 'joi';
import { UserRoleCreateWithoutUserInputSchemaObject } from './UserRoleCreateWithoutUserInput.schema';
import { UserRoleUncheckedCreateWithoutUserInputSchemaObject } from './UserRoleUncheckedCreateWithoutUserInput.schema';
import { UserRoleCreateOrConnectWithoutUserInputSchemaObject } from './UserRoleCreateOrConnectWithoutUserInput.schema';
import { UserRoleUpsertWithWhereUniqueWithoutUserInputSchemaObject } from './UserRoleUpsertWithWhereUniqueWithoutUserInput.schema';
import { UserRoleCreateManyUserInputEnvelopeSchemaObject } from './UserRoleCreateManyUserInputEnvelope.schema';
import { UserRoleWhereUniqueInputSchemaObject } from './UserRoleWhereUniqueInput.schema';
import { UserRoleUpdateWithWhereUniqueWithoutUserInputSchemaObject } from './UserRoleUpdateWithWhereUniqueWithoutUserInput.schema';
import { UserRoleUpdateManyWithWhereWithoutUserInputSchemaObject } from './UserRoleUpdateManyWithWhereWithoutUserInput.schema';
import { UserRoleScalarWhereInputSchemaObject } from './UserRoleScalarWhereInput.schema';

export const UserRoleUpdateManyWithoutUserNestedInputSchemaObject = {
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
  upsert: Joi.alternatives().try(
    Joi.object().keys(
      UserRoleUpsertWithWhereUniqueWithoutUserInputSchemaObject
    ),
    Joi.array().items(
      Joi.object().keys(
        UserRoleUpsertWithWhereUniqueWithoutUserInputSchemaObject
      )
    )
  ),
  createMany: Joi.object().keys(
    UserRoleCreateManyUserInputEnvelopeSchemaObject
  ),
  set: Joi.alternatives().try(
    Joi.object().keys(UserRoleWhereUniqueInputSchemaObject),
    Joi.array().items(Joi.object().keys(UserRoleWhereUniqueInputSchemaObject))
  ),
  disconnect: Joi.alternatives().try(
    Joi.object().keys(UserRoleWhereUniqueInputSchemaObject),
    Joi.array().items(Joi.object().keys(UserRoleWhereUniqueInputSchemaObject))
  ),
  delete: Joi.alternatives().try(
    Joi.object().keys(UserRoleWhereUniqueInputSchemaObject),
    Joi.array().items(Joi.object().keys(UserRoleWhereUniqueInputSchemaObject))
  ),
  connect: Joi.alternatives().try(
    Joi.object().keys(UserRoleWhereUniqueInputSchemaObject),
    Joi.array().items(Joi.object().keys(UserRoleWhereUniqueInputSchemaObject))
  ),
  update: Joi.alternatives().try(
    Joi.object().keys(
      UserRoleUpdateWithWhereUniqueWithoutUserInputSchemaObject
    ),
    Joi.array().items(
      Joi.object().keys(
        UserRoleUpdateWithWhereUniqueWithoutUserInputSchemaObject
      )
    )
  ),
  updateMany: Joi.alternatives().try(
    Joi.object().keys(UserRoleUpdateManyWithWhereWithoutUserInputSchemaObject),
    Joi.array().items(
      Joi.object().keys(UserRoleUpdateManyWithWhereWithoutUserInputSchemaObject)
    )
  ),
  deleteMany: Joi.alternatives().try(
    Joi.object().keys(UserRoleScalarWhereInputSchemaObject),
    Joi.array().items(Joi.object().keys(UserRoleScalarWhereInputSchemaObject))
  )
};
