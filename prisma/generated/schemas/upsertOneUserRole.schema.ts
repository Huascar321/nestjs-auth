import Joi from 'joi';
import {
  UserRoleWhereUniqueInputSchemaObject,
  UserRoleCreateInputSchemaObject,
  UserRoleUpdateInputSchemaObject
} from './objects';

export const UserRoleUpsertSchema = Joi.object()
  .keys({
    where: Joi.object().keys(UserRoleWhereUniqueInputSchemaObject),
    data: Joi.object().keys(UserRoleCreateInputSchemaObject),
    update: Joi.object().keys(UserRoleUpdateInputSchemaObject)
  })
  .required();
