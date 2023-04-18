import Joi from 'joi';
import {
  RolePermissionUpdateInputSchemaObject,
  RolePermissionWhereUniqueInputSchemaObject
} from './objects';

export const RolePermissionUpdateOneSchema = Joi.object()
  .keys({
    data: Joi.object().keys(RolePermissionUpdateInputSchemaObject),
    where: Joi.object().keys(RolePermissionWhereUniqueInputSchemaObject)
  })
  .required();
