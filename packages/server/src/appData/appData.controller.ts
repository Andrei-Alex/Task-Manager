import { Controller, Get } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
const configService = new ConfigService();
@ApiTags('AppData')
@Controller('AppData')
export class AppDataController {
  @Get()
  @ApiOperation({ summary: 'Display Server version' })
  getServerVersion() {
    return configService.get('SERVER_VERSION');
  }
}
