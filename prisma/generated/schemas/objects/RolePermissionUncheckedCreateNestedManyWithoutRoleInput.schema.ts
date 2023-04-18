// @ts-nocheck
import Joi from 'joi';
import { RolePermissionCreateWithoutRoleInputSchemaObject } from './RolePermissionCreateWithoutRoleInput.schema';
import { RolePermissionUncheckedCreateWithoutRoleInputSchemaObject } from './RolePermissionUncheckedCreateWithoutRoleInput.schema';
import { RolePermissionCreateOrConnectWithoutRoleInputSchemaObject } from './RolePermissionCreateOrConnectWithoutRoleInput.schema';
import { RolePermissionCreateManyRoleInputEnvelopeSchemaObject } from './RolePermissionCreateManyRoleInputEnvelope.schema';
import { RolePermissionWhereUniqueInputSchemaObject } from './RolePermissionWhereUniqueInput.schema';

export const RolePermissionUncheckedCreateNestedManyWithoutRoleInputSchemaObject =
  {
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
    createMany: Joi.object().keys(
      RolePermissionCreateManyRoleInputEnvelopeSchemaObject
    ),
    connect: Joi.alternatives().try(
      Joi.object().keys(RolePermissionWhereUniqueInputSchemaObject),
      Joi.array().items(
        Joi.object().keys(RolePermissionWhereUniqueInputSchemaObject)
      )
    )
  };
