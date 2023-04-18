// @ts-nocheck
import Joi from 'joi';
import { IntFilterSchemaObject } from './IntFilter.schema';

export const RolePermissionScalarWhereInputSchemaObject = {
  AND: Joi.alternatives().try(
    Joi.link('#RolePermissionScalarWhereInput'),
    Joi.array().items(Joi.link('#RolePermissionScalarWhereInput'))
  ),
  OR: Joi.array().items(Joi.link('#RolePermissionScalarWhereInput')),
  NOT: Joi.alternatives().try(
    Joi.link('#RolePermissionScalarWhereInput'),
    Joi.array().items(Joi.link('#RolePermissionScalarWhereInput'))
  ),
  id: Joi.alternatives().try(
    Joi.object().keys(IntFilterSchemaObject),
    Joi.number()
  ),
  roleId: Joi.alternatives().try(
    Joi.object().keys(IntFilterSchemaObject),
    Joi.number()
  ),
  permissionId: Joi.alternatives().try(
    Joi.object().keys(IntFilterSchemaObject),
    Joi.number()
  )
};
