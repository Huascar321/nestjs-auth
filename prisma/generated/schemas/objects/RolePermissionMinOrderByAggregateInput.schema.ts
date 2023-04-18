// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema';

export const RolePermissionMinOrderByAggregateInputSchemaObject = {
  id: SortOrderSchema,
  roleId: SortOrderSchema,
  permissionId: SortOrderSchema
};
