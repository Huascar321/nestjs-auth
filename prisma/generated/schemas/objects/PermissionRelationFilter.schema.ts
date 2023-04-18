// @ts-nocheck
import Joi from 'joi';
import { PermissionWhereInputSchemaObject } from './PermissionWhereInput.schema';

export const PermissionRelationFilterSchemaObject = {
  is: Joi.object().keys(PermissionWhereInputSchemaObject),
  isNot: Joi.object().keys(PermissionWhereInputSchemaObject)
};
