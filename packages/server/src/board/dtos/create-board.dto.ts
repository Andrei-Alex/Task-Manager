import { IsString, IsNotEmpty, IsArray } from 'class-validator';

export class CreateBoardDto {
  @IsString()
  @IsNotEmpty()
  name: string;
  @IsArray()
  members: string[];
}
