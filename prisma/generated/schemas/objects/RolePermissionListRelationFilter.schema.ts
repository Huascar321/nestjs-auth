// @ts-nocheck
import Joi from 'joi';
import { RolePermissionWhereInputSchemaObject } from './RolePermissionWhereInput.schema';

export const RolePermissionListRelationFilterSchemaObject = {
  every: Joi.object().keys(RolePermissionWhereInputSchemaObject),
  some: Joi.object().keys(RolePermissionWhereInputSchemaObject),
  none: Joi.object().keys(RolePermissionWhereInputSchemaObject)
};
