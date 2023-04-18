import Joi from 'joi';
import {
  RoleUpdateManyMutationInputSchemaObject,
  RoleWhereInputSchemaObject
} from './objects';

export const RoleUpdateManySchema = Joi.object()
  .keys({
    data: Joi.object().keys(RoleUpdateManyMutationInputSchemaObject),
    where: Joi.object().keys(RoleWhereInputSchemaObject)
  })
  .required();
