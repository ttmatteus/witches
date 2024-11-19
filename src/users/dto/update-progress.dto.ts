import { Type } from 'class-transformer';
import { IsNotEmpty, IsObject, ValidateNested, IsInt } from 'class-validator';

class ProgressDto {
  @IsInt()
  @IsNotEmpty()
  level: number;
}

export class UpdateProgressDto {
  @ValidateNested()
  @IsNotEmpty()
  @IsObject()
  @Type(() => ProgressDto)
  progress: ProgressDto;
}
