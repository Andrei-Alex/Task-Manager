import { Controller, Get } from '@nestjs/common';
import {
  HealthCheckService,
  HealthCheck,
  TypeOrmHealthIndicator,
} from '@nestjs/terminus';
import { ConfigService } from '@nestjs/config';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

const configService = new ConfigService();

/**
 * Controller for handling health checks.
 */
@ApiTags('Health')
@Controller('health')
export class HealthController {
  constructor(
    private health: HealthCheckService,
    private db: TypeOrmHealthIndicator,
  ) {}

  /**
   * Endpoint to perform health checks.
   *
   * @returns A Promise resolving to the health check results.
   */
  @Get()
  @ApiOperation({ summary: 'Display Health check' })
  @HealthCheck()
  check() {
    return this.health.check([
      /**
       * Perform a health check for the database.
       *
       * @param configService.get('DB_DATABASE') - The name of the database to check.
       */
      () => this.db.pingCheck(configService.get('DB_DATABASE')),
    ]);
  }
}
