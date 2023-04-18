import Joi from 'joi';
import {
  UserRoleWhereInputSchemaObject,
  UserRoleOrderByWithAggregationInputSchemaObject,
  UserRoleScalarWhereWithAggregatesInputSchemaObject
} from './objects';
import { UserRoleScalarFieldEnumSchema } from './enums';

export const UserRoleGroupBySchema = Joi.object()
  .keys({
    where: Joi.object().keys(UserRoleWhereInputSchemaObject),
    orderBy: Joi.object().keys(UserRoleOrderByWithAggregationInputSchemaObject),
    having: Joi.object().keys(
      UserRoleScalarWhereWithAggregatesInputSchemaObject
    ),
    take: Joi.number(),
    skip: Joi.number(),
    by: Joi.array().items(UserRoleScalarFieldEnumSchema).required()
  })
  .required();
