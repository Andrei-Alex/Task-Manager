import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

/**
 * Controller responsible for handling default route requests.
 */
@ApiTags('Default') // Adds "Default" tag to Swagger documentation
@Controller() // Marks this class as a controller
export class AppController {
  constructor(private readonly appService: AppService) {}

  /**
   * Handles GET requests to the default route.
   * @returns Response data with a welcome message.
   */
  @Get() // Marks this method as a GET endpoint
  @ApiOperation({ summary: 'Get Data' })
  getData() {
    return this.appService.getData();
  }
}
