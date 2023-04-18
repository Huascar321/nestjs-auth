// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { UserOrderByWithRelationInputSchemaObject } from './UserOrderByWithRelationInput.schema';
import { RoleOrderByWithRelationInputSchemaObject } from './RoleOrderByWithRelationInput.schema';

export const UserRoleOrderByWithRelationInputSchemaObject = {
  id: SortOrderSchema,
  userId: SortOrderSchema,
  roleId: SortOrderSchema,
  user: Joi.object().keys(UserOrderByWithRelationInputSchemaObject),
  role: Joi.object().keys(RoleOrderByWithRelationInputSchemaObject)
};
