import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const port = configService.get<number>('port', 3000);
  const swaggerConfig = new DocumentBuilder()
    .setTitle('Test example')
    .setDescription('A simple test API description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api', app, document);
  app.use(cookieParser());
  app.enableCors({
    origin: [configService.get<string>('frontendUrl')!],
    credentials: true,
    exposedHeaders: ['New-Token']
  });
  await app.listen(port);
}
bootstrap();
