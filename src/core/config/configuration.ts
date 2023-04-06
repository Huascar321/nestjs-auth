import * as process from 'process';
import { InternalServerErrorException } from '@nestjs/common';

export function getEnvFilePath(): string {
  const nodeEnv = process.env.NODE_ENV;
  switch (nodeEnv) {
    case 'DEVELOPMENT':
      return '.env.development';
    case 'TESTING':
      return '.env.testing';
    case 'PRODUCTION':
      return '.env.production';
    default:
      throw new InternalServerErrorException(
        'NODE_ENV has an incompatible value or does not exist'
      );
  }
}
export default () => ({
  port: parseInt(process.env.PORT!, 10) || 3000
});
