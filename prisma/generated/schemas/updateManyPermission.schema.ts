import Joi from 'joi';
import {
  PermissionUpdateManyMutationInputSchemaObject,
  PermissionWhereInputSchemaObject
} from './objects';

export const PermissionUpdateManySchema = Joi.object()
  .keys({
    data: Joi.object().keys(PermissionUpdateManyMutationInputSchemaObject),
    where: Joi.object().keys(PermissionWhereInputSchemaObject)
  })
  .required();
