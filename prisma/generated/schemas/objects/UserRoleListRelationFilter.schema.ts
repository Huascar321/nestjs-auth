// @ts-nocheck
import Joi from 'joi';
import { UserRoleWhereInputSchemaObject } from './UserRoleWhereInput.schema';

export const UserRoleListRelationFilterSchemaObject = {
  every: Joi.object().keys(UserRoleWhereInputSchemaObject),
  some: Joi.object().keys(UserRoleWhereInputSchemaObject),
  none: Joi.object().keys(UserRoleWhereInputSchemaObject)
};
