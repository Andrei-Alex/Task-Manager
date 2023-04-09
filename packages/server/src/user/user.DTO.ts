import { IsString, IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsString()
  full_name: string;
  @IsEmail()
  email: string;
  @IsString()
  @IsNotEmpty()
  password: string;
}
