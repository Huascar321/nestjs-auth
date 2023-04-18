// @ts-nocheck
import Joi from 'joi';
import { RoleWhereInputSchemaObject } from './RoleWhereInput.schema';

export const RoleRelationFilterSchemaObject = {
  is: Joi.object().keys(RoleWhereInputSchemaObject),
  isNot: Joi.object().keys(RoleWhereInputSchemaObject)
};
