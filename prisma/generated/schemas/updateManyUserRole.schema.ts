import Joi from 'joi';
import {
  UserRoleUpdateManyMutationInputSchemaObject,
  UserRoleWhereInputSchemaObject
} from './objects';

export const UserRoleUpdateManySchema = Joi.object()
  .keys({
    data: Joi.object().keys(UserRoleUpdateManyMutationInputSchemaObject),
    where: Joi.object().keys(UserRoleWhereInputSchemaObject)
  })
  .required();
