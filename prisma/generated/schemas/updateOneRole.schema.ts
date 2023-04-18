import Joi from 'joi';
import {
  RoleUpdateInputSchemaObject,
  RoleWhereUniqueInputSchemaObject
} from './objects';

export const RoleUpdateOneSchema = Joi.object()
  .keys({
    data: Joi.object().keys(RoleUpdateInputSchemaObject),
    where: Joi.object().keys(RoleWhereUniqueInputSchemaObject)
  })
  .required();
