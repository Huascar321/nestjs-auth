// @ts-nocheck
import Joi from 'joi';
import { IntFilterSchemaObject } from './IntFilter.schema';
import { StringFilterSchemaObject } from './StringFilter.schema';
import { RolePermissionListRelationFilterSchemaObject } from './RolePermissionListRelationFilter.schema';
import { UserRoleListRelationFilterSchemaObject } from './UserRoleListRelationFilter.schema';

export const RoleWhereInputSchemaObject = {
  AND: Joi.alternatives().try(
    Joi.link('#RoleWhereInput'),
    Joi.array().items(Joi.link('#RoleWhereInput'))
  ),
  OR: Joi.array().items(Joi.link('#RoleWhereInput')),
  NOT: Joi.alternatives().try(
    Joi.link('#RoleWhereInput'),
    Joi.array().items(Joi.link('#RoleWhereInput'))
  ),
  id: Joi.alternatives().try(
    Joi.object().keys(IntFilterSchemaObject),
    Joi.number()
  ),
  name: Joi.alternatives().try(
    Joi.object().keys(StringFilterSchemaObject),
    Joi.string()
  ),
  description: Joi.alternatives().try(
    Joi.object().keys(StringFilterSchemaObject),
    Joi.string()
  ),
  rolePermission: Joi.object().keys(
    RolePermissionListRelationFilterSchemaObject
  ),
  userRoles: Joi.object().keys(UserRoleListRelationFilterSchemaObject)
};
