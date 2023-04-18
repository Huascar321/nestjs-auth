// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { RoleOrderByWithRelationInputSchemaObject } from './RoleOrderByWithRelationInput.schema';
import { PermissionOrderByWithRelationInputSchemaObject } from './PermissionOrderByWithRelationInput.schema';

export const RolePermissionOrderByWithRelationInputSchemaObject = {
  id: SortOrderSchema,
  roleId: SortOrderSchema,
  permissionId: SortOrderSchema,
  role: Joi.object().keys(RoleOrderByWithRelationInputSchemaObject),
  permission: Joi.object().keys(PermissionOrderByWithRelationInputSchemaObject)
};
