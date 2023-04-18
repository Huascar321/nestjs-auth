import Joi from 'joi';
import {
  RoleWhereInputSchemaObject,
  RoleOrderByWithAggregationInputSchemaObject,
  RoleScalarWhereWithAggregatesInputSchemaObject
} from './objects';
import { RoleScalarFieldEnumSchema } from './enums';

export const RoleGroupBySchema = Joi.object()
  .keys({
    where: Joi.object().keys(RoleWhereInputSchemaObject),
    orderBy: Joi.object().keys(RoleOrderByWithAggregationInputSchemaObject),
    having: Joi.object().keys(RoleScalarWhereWithAggregatesInputSchemaObject),
    take: Joi.number(),
    skip: Joi.number(),
    by: Joi.array().items(RoleScalarFieldEnumSchema).required()
  })
  .required();
