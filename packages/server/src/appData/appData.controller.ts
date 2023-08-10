import { Controller, Get } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

const configService = new ConfigService();

/**
 * Controller responsible for retrieving application data.
 */
@ApiTags('AppData')
@Controller('AppData')
export class AppDataController {
  /**
   * Handles GET requests to retrieve the server version.
   * @returns Server version from configuration.
   */
  @Get() // Marks this method as a GET endpoint
  @ApiOperation({ summary: 'Display Server version' })
  getServerVersion() {
    return configService.get('SERVER_VERSION');
  }
}
