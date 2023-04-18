// @ts-nocheck
import Joi from 'joi';
import { UserWhereInputSchemaObject } from './UserWhereInput.schema';

export const UserRelationFilterSchemaObject = {
  is: Joi.object().keys(UserWhereInputSchemaObject),
  isNot: Joi.object().keys(UserWhereInputSchemaObject)
};
