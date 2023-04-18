import Joi from 'joi';
import {
  PermissionUpdateInputSchemaObject,
  PermissionWhereUniqueInputSchemaObject
} from './objects';

export const PermissionUpdateOneSchema = Joi.object()
  .keys({
    data: Joi.object().keys(PermissionUpdateInputSchemaObject),
    where: Joi.object().keys(PermissionWhereUniqueInputSchemaObject)
  })
  .required();
