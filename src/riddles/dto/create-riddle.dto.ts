import { IsNotEmpty, IsInt, IsString } from 'class-validator';

export class CreateRiddleDto {
  @IsInt()
  @IsNotEmpty()
  phase: number;

  @IsString()
  @IsNotEmpty()
  answer: string;
}
