import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserModule } from './user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstant } from '../../shared/constants/jwt.constant';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { RoleService } from './role/role.service';
import { RoleController } from './role/role.controller';
import configuration from '../../core/config/configuration';
import { PermissionService } from './role/permission/permission.service';

@Module({
  imports: [
    UserModule,
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
  controllers: [AuthController, RoleController],
  providers: [AuthService, RoleService, PermissionService],
  exports: [AuthService]
})
export class AuthModule {}
