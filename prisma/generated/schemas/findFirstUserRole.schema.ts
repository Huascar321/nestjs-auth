import Joi from 'joi';
import {
  UserRoleWhereInputSchemaObject,
  UserRoleOrderByWithRelationInputSchemaObject,
  UserRoleWhereUniqueInputSchemaObject
} from './objects';
import { UserRoleScalarFieldEnumSchema } from './enums';

export const UserRoleFindFirstSchema = Joi.object()
  .keys({
    where: Joi.object().keys(UserRoleWhereInputSchemaObject),
    orderBy: Joi.object().keys(UserRoleOrderByWithRelationInputSchemaObject),
    cursor: Joi.object().keys(UserRoleWhereUniqueInputSchemaObject),
    take: Joi.number(),
    skip: Joi.number(),
    distinct: Joi.array().items(UserRoleScalarFieldEnumSchema)
  })
  .required();
