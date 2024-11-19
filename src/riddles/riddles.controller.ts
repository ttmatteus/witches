// riddles/riddles.controller.ts
import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { RiddlesService } from './riddles.service';
import { AnswerDto } from './dto/answer.dto';
import { CreateRiddleDto } from './dto/create-riddle.dto';

@Controller('riddles')
export class RiddlesController {
  constructor(private readonly riddlesService: RiddlesService) {}

  // Endpoint para obter o enigma da fase
  @Get(':phase')
  async getRiddle(@Param('phase') phase: number) {
    return this.riddlesService.getRiddleByPhase(phase);
  }

  // Cria um novo enigma com a resposta criptografada
  @Post()
  async createRiddle(@Body() createRiddleDto: CreateRiddleDto) {
    const { phase, answer } = createRiddleDto;
    return this.riddlesService.createRiddle(phase, answer);
  }

  // Endpoint para verificar a resposta do enigma
  @Post(':phase')
  async checkAnswer(@Param('phase') phase: number, @Body() answerDto: AnswerDto) {
    const isCorrect = await this.riddlesService.checkAnswer(phase, answerDto);
    if (isCorrect) {
      return { message: 'Correct answer!' };
    } else {
      return { message: 'Incorrect answer, try again!' };
    }
  }
}
