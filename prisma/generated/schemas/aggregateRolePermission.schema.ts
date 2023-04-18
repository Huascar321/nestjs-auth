import Joi from 'joi';
import {
  RolePermissionWhereInputSchemaObject,
  RolePermissionOrderByWithRelationInputSchemaObject,
  RolePermissionWhereUniqueInputSchemaObject
} from './objects';

export const RolePermissionAggregateSchema = Joi.object()
  .keys({
    where: Joi.object().keys(RolePermissionWhereInputSchemaObject),
    orderBy: Joi.object().keys(
      RolePermissionOrderByWithRelationInputSchemaObject
    ),
    cursor: Joi.object().keys(RolePermissionWhereUniqueInputSchemaObject),
    take: Joi.number(),
    skip: Joi.number()
  })
  .required();
