import { Global, Module } from '@nestjs/common';
import { PrismaService } from './services/prisma/prisma.service';
import { CustomLoggerService } from './services/custom-logger/custom-logger.service';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration]
    })
  ],
  providers: [PrismaService, CustomLoggerService],
  exports: [PrismaService, CustomLoggerService]
})
export class CoreModule {}
