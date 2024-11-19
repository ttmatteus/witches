// riddles/dto/answer.dto.ts
import { IsString, IsNotEmpty } from 'class-validator';

export class AnswerDto {
  @IsString()
  @IsNotEmpty()
  answer: string;  // Resposta fornecida pelo usuário para verificação
}
