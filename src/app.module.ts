import { Logger, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatModule } from './modules/cat/cat.module';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/auth/user/user.module';
import { APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core';
import { AuthGuard } from './core/guards/auth.guard';
import { LoggingInterceptor } from './core/interceptors/logging.interceptor';
import { ConfigModule, ConfigService } from '@nestjs/config';
import configuration, { getEnvFilePath } from './core/config/configuration';
import { SharedModule } from './shared/shared.module';
import * as Joi from 'joi';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstant } from './shared/constants/jwt.constant';
import { CoreModule } from './core/core.module';
import { PermissionService } from './modules/auth/role/permission/permission.service';

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
    }),
    SharedModule,
    JwtModule.register({
      secret: jwtConstant.secret
    }),
    CoreModule
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
    },
    PermissionService
  ]
})
export class AppModule {
  private readonly logger = new Logger(AppModule.name);

  constructor(private configService: ConfigService) {
    const environment = this.configService.get<string>('environment');
    this.logger.log(
      `\x1b[34mApplication running in \x1b[96m${environment}\x1b[34m environment\x1b[0m`
    );
  }
}
