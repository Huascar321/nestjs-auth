import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserModule } from '../user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstant } from '../../shared/constants/jwt.constant';
import { ConfigModule, ConfigService } from '@nestjs/config';
import configuration from '../../core/config/configuration';

@Module({
  imports: [
    UserModule,
    /*JwtModule.register({
      global: true,
      secret: jwtConstant.secret,
      signOptions: { expiresIn: 'INSERTAr accessTokenTime AQUí' }
    })*/
    ConfigModule.forRoot({
      load: [configuration]
    }),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        secret: jwtConstant.secret,
        signOptions: { expiresIn: configService.get<string>('accessTokenTime') }
      }),
      inject: [ConfigService]
    })
  ],
  controllers: [AuthController],
  providers: [AuthService],
  exports: [AuthService]
})
export class AuthModule {}
