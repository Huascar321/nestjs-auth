import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { ObjectSchema } from 'joi';

@Injectable()
export class JoiValidatorPipe implements PipeTransform {
  constructor(private schema: ObjectSchema) {}

  transform(value: { data: unknown }): unknown {
    const { error } = this.schema.validate(value);
    if (error) {
      throw new BadRequestException(
        `Validation failed: ${error.details[0].message}`
      );
    }
    return value.data;
  }
}
