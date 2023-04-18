import Joi from 'joi';
import {
  UserRoleUpdateInputSchemaObject,
  UserRoleWhereUniqueInputSchemaObject
} from './objects';

export const UserRoleUpdateOneSchema = Joi.object()
  .keys({
    data: Joi.object().keys(UserRoleUpdateInputSchemaObject),
    where: Joi.object().keys(UserRoleWhereUniqueInputSchemaObject)
  })
  .required();
