import Joi from 'joi';
import {
  PermissionWhereInputSchemaObject,
  PermissionOrderByWithRelationInputSchemaObject,
  PermissionWhereUniqueInputSchemaObject
} from './objects';
import { PermissionScalarFieldEnumSchema } from './enums';

export const PermissionFindManySchema = Joi.object()
  .keys({
    where: Joi.object().keys(PermissionWhereInputSchemaObject),
    orderBy: Joi.object().keys(PermissionOrderByWithRelationInputSchemaObject),
    cursor: Joi.object().keys(PermissionWhereUniqueInputSchemaObject),
    take: Joi.number(),
    skip: Joi.number(),
    distinct: Joi.array().items(PermissionScalarFieldEnumSchema)
  })
  .required();
