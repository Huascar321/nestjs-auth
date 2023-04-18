// @ts-nocheck
import Joi from 'joi';
import { IntFilterSchemaObject } from './IntFilter.schema';
import { StringFilterSchemaObject } from './StringFilter.schema';
import { RolePermissionListRelationFilterSchemaObject } from './RolePermissionListRelationFilter.schema';

export const PermissionWhereInputSchemaObject = {
  AND: Joi.alternatives().try(
    Joi.link('#PermissionWhereInput'),
    Joi.array().items(Joi.link('#PermissionWhereInput'))
  ),
  OR: Joi.array().items(Joi.link('#PermissionWhereInput')),
  NOT: Joi.alternatives().try(
    Joi.link('#PermissionWhereInput'),
    Joi.array().items(Joi.link('#PermissionWhereInput'))
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
  code: Joi.alternatives().try(
    Joi.object().keys(IntFilterSchemaObject),
    Joi.number()
  ),
  rolePermission: Joi.object().keys(
    RolePermissionListRelationFilterSchemaObject
  )
};
