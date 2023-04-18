import * as process from 'process';
import { InternalServerErrorException } from '@nestjs/common';
import { Environment } from '../../shared/models/environment.model';

export function getEnvFilePath(): string {
  const nodeEnv = process.env.NODE_ENV;
  switch (nodeEnv) {
    case Environment.DEVELOPMENT:
      return '.env.development';
    case Environment.TESTING:
      return '.env.testing';
    case Environment.PRODUCTION:
      return '.env.production';
    default:
      throw new InternalServerErrorException(
        'NODE_ENV has an incompatible value or does not exist'
      );
  }
}
export default () => ({
  accessTokenTime: process.env.ACCESS_TOKEN_TIME,
  environment: process.env.NODE_ENV,
  frontendUrl: process.env.FRONTEND_URL,
  port: parseInt(process.env.PORT!, 10) || 3000,
  refreshTokenTime: process.env.REFRESH_TOKEN_TIME
});
