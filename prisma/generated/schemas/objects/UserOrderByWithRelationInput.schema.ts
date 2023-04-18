// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { UserRoleOrderByRelationAggregateInputSchemaObject } from './UserRoleOrderByRelationAggregateInput.schema';

export const UserOrderByWithRelationInputSchemaObject = {
  id: SortOrderSchema,
  username: SortOrderSchema,
  password: SortOrderSchema,
  userRoles: Joi.object().keys(
    UserRoleOrderByRelationAggregateInputSchemaObject
  )
};
