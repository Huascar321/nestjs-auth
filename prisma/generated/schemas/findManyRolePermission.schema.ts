import Joi from 'joi';
import {
  RolePermissionWhereInputSchemaObject,
  RolePermissionOrderByWithRelationInputSchemaObject,
  RolePermissionWhereUniqueInputSchemaObject
} from './objects';
import { RolePermissionScalarFieldEnumSchema } from './enums';

export const RolePermissionFindManySchema = Joi.object()
  .keys({
    where: Joi.object().keys(RolePermissionWhereInputSchemaObject),
    orderBy: Joi.object().keys(
      RolePermissionOrderByWithRelationInputSchemaObject
    ),
    cursor: Joi.object().keys(RolePermissionWhereUniqueInputSchemaObject),
    take: Joi.number(),
    skip: Joi.number(),
    distinct: Joi.array().items(RolePermissionScalarFieldEnumSchema)
  })
  .required();
