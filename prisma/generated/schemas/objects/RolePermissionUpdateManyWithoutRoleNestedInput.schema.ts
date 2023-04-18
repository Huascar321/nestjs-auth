// @ts-nocheck
import Joi from 'joi';
import { RolePermissionCreateWithoutRoleInputSchemaObject } from './RolePermissionCreateWithoutRoleInput.schema';
import { RolePermissionUncheckedCreateWithoutRoleInputSchemaObject } from './RolePermissionUncheckedCreateWithoutRoleInput.schema';
import { RolePermissionCreateOrConnectWithoutRoleInputSchemaObject } from './RolePermissionCreateOrConnectWithoutRoleInput.schema';
import { RolePermissionUpsertWithWhereUniqueWithoutRoleInputSchemaObject } from './RolePermissionUpsertWithWhereUniqueWithoutRoleInput.schema';
import { RolePermissionCreateManyRoleInputEnvelopeSchemaObject } from './RolePermissionCreateManyRoleInputEnvelope.schema';
import { RolePermissionWhereUniqueInputSchemaObject } from './RolePermissionWhereUniqueInput.schema';
import { RolePermissionUpdateWithWhereUniqueWithoutRoleInputSchemaObject } from './RolePermissionUpdateWithWhereUniqueWithoutRoleInput.schema';
import { RolePermissionUpdateManyWithWhereWithoutRoleInputSchemaObject } from './RolePermissionUpdateManyWithWhereWithoutRoleInput.schema';
import { RolePermissionScalarWhereInputSchemaObject } from './RolePermissionScalarWhereInput.schema';

export const RolePermissionUpdateManyWithoutRoleNestedInputSchemaObject = {
  create: Joi.alternatives().try(
    Joi.object().keys(RolePermissionCreateWithoutRoleInputSchemaObject),
    Joi.array().items(
      Joi.object().keys(RolePermissionCreateWithoutRoleInputSchemaObject)
    ),
    Joi.object().keys(
      RolePermissionUncheckedCreateWithoutRoleInputSchemaObject
    ),
    Joi.array().items(
      Joi.object().keys(
        RolePermissionUncheckedCreateWithoutRoleInputSchemaObject
      )
    )
  ),
  connectOrCreate: Joi.alternatives().try(
    Joi.object().keys(
      RolePermissionCreateOrConnectWithoutRoleInputSchemaObject
    ),
    Joi.array().items(
      Joi.object().keys(
        RolePermissionCreateOrConnectWithoutRoleInputSchemaObject
      )
    )
  ),
  upsert: Joi.alternatives().try(
    Joi.object().keys(
      RolePermissionUpsertWithWhereUniqueWithoutRoleInputSchemaObject
    ),
    Joi.array().items(
      Joi.object().keys(
        RolePermissionUpsertWithWhereUniqueWithoutRoleInputSchemaObject
      )
    )
  ),
  createMany: Joi.object().keys(
    RolePermissionCreateManyRoleInputEnvelopeSchemaObject
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
      RolePermissionUpdateWithWhereUniqueWithoutRoleInputSchemaObject
    ),
    Joi.array().items(
      Joi.object().keys(
        RolePermissionUpdateWithWhereUniqueWithoutRoleInputSchemaObject
      )
    )
  ),
  updateMany: Joi.alternatives().try(
    Joi.object().keys(
      RolePermissionUpdateManyWithWhereWithoutRoleInputSchemaObject
    ),
    Joi.array().items(
      Joi.object().keys(
        RolePermissionUpdateManyWithWhereWithoutRoleInputSchemaObject
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
