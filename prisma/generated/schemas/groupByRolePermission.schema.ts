import Joi from 'joi';
import {
  RolePermissionWhereInputSchemaObject,
  RolePermissionOrderByWithAggregationInputSchemaObject,
  RolePermissionScalarWhereWithAggregatesInputSchemaObject
} from './objects';
import { RolePermissionScalarFieldEnumSchema } from './enums';

export const RolePermissionGroupBySchema = Joi.object()
  .keys({
    where: Joi.object().keys(RolePermissionWhereInputSchemaObject),
    orderBy: Joi.object().keys(
      RolePermissionOrderByWithAggregationInputSchemaObject
    ),
    having: Joi.object().keys(
      RolePermissionScalarWhereWithAggregatesInputSchemaObject
    ),
    take: Joi.number(),
    skip: Joi.number(),
    by: Joi.array().items(RolePermissionScalarFieldEnumSchema).required()
  })
  .required();
