import Joi from 'joi';
import {
  PermissionWhereInputSchemaObject,
  PermissionOrderByWithAggregationInputSchemaObject,
  PermissionScalarWhereWithAggregatesInputSchemaObject
} from './objects';
import { PermissionScalarFieldEnumSchema } from './enums';

export const PermissionGroupBySchema = Joi.object()
  .keys({
    where: Joi.object().keys(PermissionWhereInputSchemaObject),
    orderBy: Joi.object().keys(
      PermissionOrderByWithAggregationInputSchemaObject
    ),
    having: Joi.object().keys(
      PermissionScalarWhereWithAggregatesInputSchemaObject
    ),
    take: Joi.number(),
    skip: Joi.number(),
    by: Joi.array().items(PermissionScalarFieldEnumSchema).required()
  })
  .required();
