// @ts-nocheck
import Joi from 'joi';
import { IntFilterSchemaObject } from './IntFilter.schema';
import { RoleRelationFilterSchemaObject } from './RoleRelationFilter.schema';
import { RoleWhereInputSchemaObject } from './RoleWhereInput.schema';
import { PermissionRelationFilterSchemaObject } from './PermissionRelationFilter.schema';
import { PermissionWhereInputSchemaObject } from './PermissionWhereInput.schema';

export const RolePermissionWhereInputSchemaObject = {
  AND: Joi.alternatives().try(
    Joi.link('#RolePermissionWhereInput'),
    Joi.array().items(Joi.link('#RolePermissionWhereInput'))
  ),
  OR: Joi.array().items(Joi.link('#RolePermissionWhereInput')),
  NOT: Joi.alternatives().try(
    Joi.link('#RolePermissionWhereInput'),
    Joi.array().items(Joi.link('#RolePermissionWhereInput'))
  ),
  id: Joi.alternatives().try(
    Joi.object().keys(IntFilterSchemaObject),
    Joi.number()
  ),
  roleId: Joi.alternatives().try(
    Joi.object().keys(IntFilterSchemaObject),
    Joi.number()
  ),
  permissionId: Joi.alternatives().try(
    Joi.object().keys(IntFilterSchemaObject),
    Joi.number()
  ),
  role: Joi.alternatives().try(
    Joi.object().keys(RoleRelationFilterSchemaObject),
    Joi.object().keys(RoleWhereInputSchemaObject)
  ),
  permission: Joi.alternatives().try(
    Joi.object().keys(PermissionRelationFilterSchemaObject),
    Joi.object().keys(PermissionWhereInputSchemaObject)
  )
};
