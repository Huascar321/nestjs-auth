// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { RolePermissionOrderByRelationAggregateInputSchemaObject } from './RolePermissionOrderByRelationAggregateInput.schema';
import { UserRoleOrderByRelationAggregateInputSchemaObject } from './UserRoleOrderByRelationAggregateInput.schema';

export const RoleOrderByWithRelationInputSchemaObject = {
  id: SortOrderSchema,
  name: SortOrderSchema,
  description: SortOrderSchema,
  rolePermission: Joi.object().keys(
    RolePermissionOrderByRelationAggregateInputSchemaObject
  ),
  userRoles: Joi.object().keys(
    UserRoleOrderByRelationAggregateInputSchemaObject
  )
};
