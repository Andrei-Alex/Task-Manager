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

/**
 * Bootstrap the NestJS application.
 */
async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  const configService = app.get(ConfigService);

  const globalPrefix = 'api';

  // Apply Helmet middleware for security headers
  app.use(helmet());
  app.use(
    helmet({
      crossOriginEmbedderPolicy: false,
      contentSecurityPolicy: false,
    }),
  );
  app.use(helmet.frameguard({ action: 'deny' }));

  // Enable CORS with allowed origins and methods
  app.enableCors({
    origin: [
      configService.get('ALLOWED_ORIGIN_SERVER'),
      configService.get('ALLOWED_ORIGIN_CLIENT'),
    ],
    methods: ['POST', 'PUT', 'DELETE', 'GET'],
  });

  // Set global application prefix
  app.setGlobalPrefix(globalPrefix);

  const options: SwaggerDocumentOptions = {
    operationIdFactory: (controllerKey: string, methodKey: string) => methodKey,
  };

  // Create Swagger documentation configuration
  const config = new DocumentBuilder()
    .addBearerAuth() // Add Bearer authentication to Swagger documentation
    .setTitle('Task Manager AUTH_API')
    .setDescription(swaggerDescription)
    .setVersion(projectVersion)
    .build();

  // Create and setup Swagger document
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  // Apply global validation pipe for request validation
  app.useGlobalPipes(new ValidationPipe());

  // Start the application listening on the configured port
  await app.listen(configService.get('PORT'));
  Logger.log(
    `🚀 Application is running on: 
    ${configService.get('ALLOWED_ORIGIN_SERVER')}/${globalPrefix}`,
  );
}

// Call the bootstrap function to start the application
bootstrap();
