import { Module } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';
import { HttpModule } from '@nestjs/axios';
import { HealthController } from './health.controller';
import { ConfigModule } from '@nestjs/config';

/**
 * Module for managing health checks and status monitoring.
 */
@Module({
  imports: [
    /**
     * Import and configure the ConfigModule to load environment variables from .env file.
     */
    ConfigModule.forRoot({ envFilePath: '.env' }),
    /**
     * Import the TerminusModule for setting up health checks.
     */
    TerminusModule,
    /**
     * Import the HttpModule for making HTTP requests.
     */
    HttpModule,
  ],
  /**
   * Controllers associated with the HealthModule.
   */
  controllers: [HealthController],
})
export class HealthModule {}
