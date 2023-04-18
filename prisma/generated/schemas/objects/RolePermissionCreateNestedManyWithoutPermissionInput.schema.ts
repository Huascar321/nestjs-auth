// @ts-nocheck
import Joi from 'joi';
import { RolePermissionCreateWithoutPermissionInputSchemaObject } from './RolePermissionCreateWithoutPermissionInput.schema';
import { RolePermissionUncheckedCreateWithoutPermissionInputSchemaObject } from './RolePermissionUncheckedCreateWithoutPermissionInput.schema';
import { RolePermissionCreateOrConnectWithoutPermissionInputSchemaObject } from './RolePermissionCreateOrConnectWithoutPermissionInput.schema';
import { RolePermissionCreateManyPermissionInputEnvelopeSchemaObject } from './RolePermissionCreateManyPermissionInputEnvelope.schema';
import { RolePermissionWhereUniqueInputSchemaObject } from './RolePermissionWhereUniqueInput.schema';

export const RolePermissionCreateNestedManyWithoutPermissionInputSchemaObject =
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
    createMany: Joi.object().keys(
      RolePermissionCreateManyPermissionInputEnvelopeSchemaObject
    ),
    connect: Joi.alternatives().try(
      Joi.object().keys(RolePermissionWhereUniqueInputSchemaObject),
      Joi.array().items(
        Joi.object().keys(RolePermissionWhereUniqueInputSchemaObject)
      )
    )
  };
