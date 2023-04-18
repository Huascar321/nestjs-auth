import Joi from 'joi';
import {
  RoleWhereInputSchemaObject,
  RoleOrderByWithRelationInputSchemaObject,
  RoleWhereUniqueInputSchemaObject
} from './objects';

export const RoleAggregateSchema = Joi.object()
  .keys({
    where: Joi.object().keys(RoleWhereInputSchemaObject),
    orderBy: Joi.object().keys(RoleOrderByWithRelationInputSchemaObject),
    cursor: Joi.object().keys(RoleWhereUniqueInputSchemaObject),
    take: Joi.number(),
    skip: Joi.number()
  })
  .required();
