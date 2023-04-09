import helmet from 'helmet';
import { ConfigService } from '@nestjs/config';
import {Logger, ValidationPipe} from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";
import { AppModule } from './app.module';
async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  const configService = app.get(ConfigService);

  const globalPrefix = 'api';
  app.use(helmet());
  app.use(
    helmet({
      crossOriginEmbedderPolicy: false,
      contentSecurityPolicy: false,
    })
  );
  app.use(helmet.frameguard({ action: 'deny' }));

  app.enableCors({
    origin: [
      configService.get('ALLOWED_ORIGIN_SERVER'),
      configService.get('ALLOWED_ORIGIN_CLIENT'),
    ],
    methods: ['POST', 'PUT', 'DELETE', 'GET'],
  }),
    app.setGlobalPrefix(globalPrefix);

  const config = new DocumentBuilder()
    .setTitle('Task Manager API')
    .setDescription('It\'s so Swagger...')
    .setVersion('0.0.1')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document,  );

  app.useGlobalPipes(new ValidationPipe())
  await app.listen(configService.get('PORT'));
  Logger.log(
    `🚀 Application is running on:
    ${configService.get('ALLOWED_ORIGIN_SERVER')}/${globalPrefix}`
  );
}

bootstrap();
