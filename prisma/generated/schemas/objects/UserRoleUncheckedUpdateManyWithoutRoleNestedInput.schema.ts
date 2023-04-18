// @ts-nocheck
import Joi from 'joi';
import { UserRoleCreateWithoutRoleInputSchemaObject } from './UserRoleCreateWithoutRoleInput.schema';
import { UserRoleUncheckedCreateWithoutRoleInputSchemaObject } from './UserRoleUncheckedCreateWithoutRoleInput.schema';
import { UserRoleCreateOrConnectWithoutRoleInputSchemaObject } from './UserRoleCreateOrConnectWithoutRoleInput.schema';
import { UserRoleUpsertWithWhereUniqueWithoutRoleInputSchemaObject } from './UserRoleUpsertWithWhereUniqueWithoutRoleInput.schema';
import { UserRoleCreateManyRoleInputEnvelopeSchemaObject } from './UserRoleCreateManyRoleInputEnvelope.schema';
import { UserRoleWhereUniqueInputSchemaObject } from './UserRoleWhereUniqueInput.schema';
import { UserRoleUpdateWithWhereUniqueWithoutRoleInputSchemaObject } from './UserRoleUpdateWithWhereUniqueWithoutRoleInput.schema';
import { UserRoleUpdateManyWithWhereWithoutRoleInputSchemaObject } from './UserRoleUpdateManyWithWhereWithoutRoleInput.schema';
import { UserRoleScalarWhereInputSchemaObject } from './UserRoleScalarWhereInput.schema';

export const UserRoleUncheckedUpdateManyWithoutRoleNestedInputSchemaObject = {
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
  upsert: Joi.alternatives().try(
    Joi.object().keys(
      UserRoleUpsertWithWhereUniqueWithoutRoleInputSchemaObject
    ),
    Joi.array().items(
      Joi.object().keys(
        UserRoleUpsertWithWhereUniqueWithoutRoleInputSchemaObject
      )
    )
  ),
  createMany: Joi.object().keys(
    UserRoleCreateManyRoleInputEnvelopeSchemaObject
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
      UserRoleUpdateWithWhereUniqueWithoutRoleInputSchemaObject
    ),
    Joi.array().items(
      Joi.object().keys(
        UserRoleUpdateWithWhereUniqueWithoutRoleInputSchemaObject
      )
    )
  ),
  updateMany: Joi.alternatives().try(
    Joi.object().keys(UserRoleUpdateManyWithWhereWithoutRoleInputSchemaObject),
    Joi.array().items(
      Joi.object().keys(UserRoleUpdateManyWithWhereWithoutRoleInputSchemaObject)
    )
  ),
  deleteMany: Joi.alternatives().try(
    Joi.object().keys(UserRoleScalarWhereInputSchemaObject),
    Joi.array().items(Joi.object().keys(UserRoleScalarWhereInputSchemaObject))
  )
};
