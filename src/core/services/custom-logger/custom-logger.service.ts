import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Environment } from '../../../shared/models/environment.model';

@Injectable()
export class CustomLoggerService {
  private readonly logger = new Logger('Debugger');

  constructor(private configService: ConfigService) {}

  log(text: string): void {
    if (
      this.configService.get<string>('environment') === Environment.DEVELOPMENT
    ) {
      this.logger.log(`\x1b[35m${text}\x1b[0m`);
    }
  }
}
