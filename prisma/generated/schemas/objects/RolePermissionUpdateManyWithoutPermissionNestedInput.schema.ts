// @ts-nocheck
import Joi from 'joi';
import { RolePermissionCreateWithoutPermissionInputSchemaObject } from './RolePermissionCreateWithoutPermissionInput.schema';
import { RolePermissionUncheckedCreateWithoutPermissionInputSchemaObject } from './RolePermissionUncheckedCreateWithoutPermissionInput.schema';
import { RolePermissionCreateOrConnectWithoutPermissionInputSchemaObject } from './RolePermissionCreateOrConnectWithoutPermissionInput.schema';
import { RolePermissionUpsertWithWhereUniqueWithoutPermissionInputSchemaObject } from './RolePermissionUpsertWithWhereUniqueWithoutPermissionInput.schema';
import { RolePermissionCreateManyPermissionInputEnvelopeSchemaObject } from './RolePermissionCreateManyPermissionInputEnvelope.schema';
import { RolePermissionWhereUniqueInputSchemaObject } from './RolePermissionWhereUniqueInput.schema';
import { RolePermissionUpdateWithWhereUniqueWithoutPermissionInputSchemaObject } from './RolePermissionUpdateWithWhereUniqueWithoutPermissionInput.schema';
import { RolePermissionUpdateManyWithWhereWithoutPermissionInputSchemaObject } from './RolePermissionUpdateManyWithWhereWithoutPermissionInput.schema';
import { RolePermissionScalarWhereInputSchemaObject } from './RolePermissionScalarWhereInput.schema';

export const RolePermissionUpdateManyWithoutPermissionNestedInputSchemaObject =
  {
    create: Joi.alternatives().try(
      Joi.object().keys(RolePermissionCreateWithoutPermissionInputSchemaObject),
      Joi.array().items(
        Joi.object().keys(
          RolePermissionCreateWithoutPermissionInputSchemaObject
        )
      ),
      Joi.object().keys(
        RolePermissionUncheckedCreateWithoutPermissionInputSchemaObject
      ),
      Joi.array().items(
        Joi.object().keys(
          RolePermissionUncheckedCreateWithoutPermissionInputSchemaObject
        )
      )
    ),
    connectOrCreate: Joi.alternatives().try(
      Joi.object().keys(
        RolePermissionCreateOrConnectWithoutPermissionInputSchemaObject
      ),
      Joi.array().items(
        Joi.object().keys(
          RolePermissionCreateOrConnectWithoutPermissionInputSchemaObject
        )
      )
    ),
    upsert: Joi.alternatives().try(
      Joi.object().keys(
        RolePermissionUpsertWithWhereUniqueWithoutPermissionInputSchemaObject
      ),
      Joi.array().items(
        Joi.object().keys(
          RolePermissionUpsertWithWhereUniqueWithoutPermissionInputSchemaObject
        )
      )
    ),
    createMany: Joi.object().keys(
      RolePermissionCreateManyPermissionInputEnvelopeSchemaObject
    ),
    set: Joi.alternatives().try(
      Joi.object().keys(RolePermissionWhereUniqueInputSchemaObject),
      Joi.array().items(
        Joi.object().keys(RolePermissionWhereUniqueInputSchemaObject)
      )
    ),
    disconnect: Joi.alternatives().try(
      Joi.object().keys(RolePermissionWhereUniqueInputSchemaObject),
      Joi.array().items(
        Joi.object().keys(RolePermissionWhereUniqueInputSchemaObject)
      )
    ),
    delete: Joi.alternatives().try(
      Joi.object().keys(RolePermissionWhereUniqueInputSchemaObject),
      Joi.array().items(
        Joi.object().keys(RolePermissionWhereUniqueInputSchemaObject)
      )
    ),
    connect: Joi.alternatives().try(
      Joi.object().keys(RolePermissionWhereUniqueInputSchemaObject),
      Joi.array().items(
        Joi.object().keys(RolePermissionWhereUniqueInputSchemaObject)
      )
    ),
    update: Joi.alternatives().try(
      Joi.object().keys(
        RolePermissionUpdateWithWhereUniqueWithoutPermissionInputSchemaObject
      ),
      Joi.array().items(
        Joi.object().keys(
          RolePermissionUpdateWithWhereUniqueWithoutPermissionInputSchemaObject
        )
      )
    ),
    updateMany: Joi.alternatives().try(
      Joi.object().keys(
        RolePermissionUpdateManyWithWhereWithoutPermissionInputSchemaObject
      ),
      Joi.array().items(
        Joi.object().keys(
          RolePermissionUpdateManyWithWhereWithoutPermissionInputSchemaObject
        )
      )
    ),
    deleteMany: Joi.alternatives().try(
      Joi.object().keys(RolePermissionScalarWhereInputSchemaObject),
      Joi.array().items(
        Joi.object().keys(RolePermissionScalarWhereInputSchemaObject)
      )
    )
  };
