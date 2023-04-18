import Joi from 'joi';
import {
  PermissionWhereInputSchemaObject,
  PermissionOrderByWithRelationInputSchemaObject,
  PermissionWhereUniqueInputSchemaObject
} from './objects';

export const PermissionAggregateSchema = Joi.object()
  .keys({
    where: Joi.object().keys(PermissionWhereInputSchemaObject),
    orderBy: Joi.object().keys(PermissionOrderByWithRelationInputSchemaObject),
    cursor: Joi.object().keys(PermissionWhereUniqueInputSchemaObject),
    take: Joi.number(),
    skip: Joi.number()
  })
  .required();
