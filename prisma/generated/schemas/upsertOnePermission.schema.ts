import Joi from 'joi';
import {
  PermissionWhereUniqueInputSchemaObject,
  PermissionCreateInputSchemaObject,
  PermissionUpdateInputSchemaObject
} from './objects';

export const PermissionUpsertSchema = Joi.object()
  .keys({
    where: Joi.object().keys(PermissionWhereUniqueInputSchemaObject),
    data: Joi.object().keys(PermissionCreateInputSchemaObject),
    update: Joi.object().keys(PermissionUpdateInputSchemaObject)
  })
  .required();
