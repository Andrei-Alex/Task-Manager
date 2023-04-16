import { IsString, IsEmail, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ description: 'User name', example: 'John Doe' })
  @IsString()
  @ApiProperty()
  full_name: string;
  @IsEmail()
  @ApiProperty({ description: 'User email', example: 'John@mail.com' })
  email: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'password', example: '$Swagg3r' })
  password: string;
}
