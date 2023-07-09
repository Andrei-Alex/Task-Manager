import { IsString, IsEmail, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateAppDataDto {
  @ApiProperty({ description: 'Server version', example: '0.0.2' })
  @IsString()
  @ApiProperty()
  serverVersion: string;
}
