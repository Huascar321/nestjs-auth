import Joi from 'joi';
import {
  RoleWhereUniqueInputSchemaObject,
  RoleCreateInputSchemaObject,
  RoleUpdateInputSchemaObject
} from './objects';

export const RoleUpsertSchema = Joi.object()
  .keys({
    where: Joi.object().keys(RoleWhereUniqueInputSchemaObject),
    data: Joi.object().keys(RoleCreateInputSchemaObject),
    update: Joi.object().keys(RoleUpdateInputSchemaObject)
  })
  .required();
