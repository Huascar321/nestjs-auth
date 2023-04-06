import { Logger, MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatModule } from './modules/cat/cat.module';
import { logger } from './core/middlewares/logger.middleware';
import { CatController } from './modules/cat/cat.controller';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/user/user.module';
import { APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core';
import { AuthGuard } from './core/guards/auth.guard';
import { LoggingInterceptor } from './core/interceptors/logging.interceptor';
import { ConfigModule, ConfigService } from '@nestjs/config';
import configuration, { getEnvFilePath } from './core/config/configuration';
import * as Joi from 'joi';

@Module({
  imports: [
    CatModule,
    AuthModule,
    UserModule,
    ConfigModule.forRoot({
      validationSchema: Joi.object({
        NODE_ENV: Joi.string()
          .valid('DEVELOPMENT', 'TESTING', 'PRODUCTION')
          .required(),
        PORT: Joi.number().default(3000)
      }),
      validationOptions: {
        allowUnknown: true,
        abortEarly: true
      },
      envFilePath: getEnvFilePath(),
      isGlobal: true,
      load: [configuration]
    })
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor
    }
  ]
})
export class AppModule implements NestModule {
  private readonly logger = new Logger(AppModule.name);

  constructor(private configService: ConfigService) {
    const nodeEnv = this.configService.get<string>('NODE_ENV');
    this.logger.log(
      `\x1b[34mApplication running in \x1b[96m${nodeEnv}\x1b[34m environment\x1b[0m`
    );
  }

  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(logger).forRoutes(CatController);
  }
}
