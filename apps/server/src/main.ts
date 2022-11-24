import helmet from 'helmet';
import { ConfigService } from '@nestjs/config';
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  const configService = app.get(ConfigService);
  const globalPrefix = 'api';
  app.use(helmet());
  app.use(
    helmet({
      crossOriginEmbedderPolicy: false,
    })
  );
  app.use(helmet.frameguard({ action: 'deny' }));

  app.enableCors({
    origin: [
      configService.get('ALLOWED_ORIGIN1'),
      configService.get('ALLOWED_ORIGIN2'),
    ],
    methods: ['POST', 'PUT', 'DELETE', 'GET'],
  }),
    app.setGlobalPrefix(globalPrefix);
  const port = process.env.PORT || 3333;
  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();
