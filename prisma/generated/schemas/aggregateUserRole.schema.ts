import Joi from 'joi';
import {
  UserRoleWhereInputSchemaObject,
  UserRoleOrderByWithRelationInputSchemaObject,
  UserRoleWhereUniqueInputSchemaObject
} from './objects';

export const UserRoleAggregateSchema = Joi.object()
  .keys({
    where: Joi.object().keys(UserRoleWhereInputSchemaObject),
    orderBy: Joi.object().keys(UserRoleOrderByWithRelationInputSchemaObject),
    cursor: Joi.object().keys(UserRoleWhereUniqueInputSchemaObject),
    take: Joi.number(),
    skip: Joi.number()
  })
  .required();
