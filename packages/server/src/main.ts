import helmet from 'helmet';
import { ConfigService } from '@nestjs/config';
import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import {
  SwaggerModule,
  DocumentBuilder,
  SwaggerDocumentOptions,
} from '@nestjs/swagger';
import { AppModule } from './app.module';
import { swaggerDescription, projectVersion } from './constants';
async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  const configService = app.get(ConfigService);

  const globalPrefix = 'api';
  app.use(helmet());
  app.use(
    helmet({
      crossOriginEmbedderPolicy: false,
      contentSecurityPolicy: false,
    }),
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

  const options: SwaggerDocumentOptions = {
    operationIdFactory: (controllerKey: string, methodKey: string) => methodKey,
  };

  const config = new DocumentBuilder()
    .addBearerAuth()
    .setTitle('Task Manager AUTH_API')
    .setDescription(swaggerDescription)
    .setVersion(projectVersion)
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api', app, document);

  app.useGlobalPipes(new ValidationPipe());
  await app.listen(configService.get('PORT'));
  Logger.log(
    `🚀 Application is running on:
    ${configService.get('ALLOWED_ORIGIN_SERVER')}/${globalPrefix}`,
  );
}

bootstrap();
