// @ts-nocheck
import Joi from 'joi';
import { IntFilterSchemaObject } from './IntFilter.schema';
import { UserRelationFilterSchemaObject } from './UserRelationFilter.schema';
import { UserWhereInputSchemaObject } from './UserWhereInput.schema';
import { RoleRelationFilterSchemaObject } from './RoleRelationFilter.schema';
import { RoleWhereInputSchemaObject } from './RoleWhereInput.schema';

export const UserRoleWhereInputSchemaObject = {
  AND: Joi.alternatives().try(
    Joi.link('#UserRoleWhereInput'),
    Joi.array().items(Joi.link('#UserRoleWhereInput'))
  ),
  OR: Joi.array().items(Joi.link('#UserRoleWhereInput')),
  NOT: Joi.alternatives().try(
    Joi.link('#UserRoleWhereInput'),
    Joi.array().items(Joi.link('#UserRoleWhereInput'))
  ),
  id: Joi.alternatives().try(
    Joi.object().keys(IntFilterSchemaObject),
    Joi.number()
  ),
  userId: Joi.alternatives().try(
    Joi.object().keys(IntFilterSchemaObject),
    Joi.number()
  ),
  roleId: Joi.alternatives().try(
    Joi.object().keys(IntFilterSchemaObject),
    Joi.number()
  ),
  user: Joi.alternatives().try(
    Joi.object().keys(UserRelationFilterSchemaObject),
    Joi.object().keys(UserWhereInputSchemaObject)
  ),
  role: Joi.alternatives().try(
    Joi.object().keys(RoleRelationFilterSchemaObject),
    Joi.object().keys(RoleWhereInputSchemaObject)
  )
};
