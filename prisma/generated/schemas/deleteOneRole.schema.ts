import Joi from 'joi';
import { RoleWhereUniqueInputSchemaObject } from './objects';

export const RoleDeleteOneSchema = Joi.object()
  .keys({ where: Joi.object().keys(RoleWhereUniqueInputSchemaObject) })
  .required();
