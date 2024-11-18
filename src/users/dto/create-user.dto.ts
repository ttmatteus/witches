import { IsNotEmpty, IsObject, ValidateNested, IsInt } from 'class-validator';
import { Type } from 'class-transformer';

class ProgressDto {
  @IsInt()
  @IsNotEmpty()
  level: number;
}

export class CreateUserDto {
  @ValidateNested()
  @IsNotEmpty()
  @IsObject()
  @Type(() => ProgressDto)  
  progress: ProgressDto;
}
