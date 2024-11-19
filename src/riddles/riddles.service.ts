import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Riddle } from './dto/entities/riddle.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { AnswerDto } from './dto/answer.dto';

@Injectable()
export class RiddlesService {
    constructor(
        @InjectRepository(Riddle)
        private riddlesRepository: Repository<Riddle>,
    ){}

    // Retorna pela fase
    async getRiddleByPhase(phase: number): Promise<Riddle> {
        const riddle = await this.riddlesRepository.findOne({ where: { phase } });
        if (!riddle) {
            throw new Error('Riddle not found for this phase');
        }
        return riddle;
    }

    // Criar resposta
    async createRiddle(phase: number, answer: string): Promise<Riddle> {
        const hashedAnswer = await bcrypt.hash(answer, 10);
        const riddle = this.riddlesRepository.create({
            answer: hashedAnswer,
            phase,
        });
        return this.riddlesRepository.save(riddle);
    }

    // Verificar resposta
  async checkAnswer(phase: number, answerDto: AnswerDto): Promise<boolean> {
    const riddle = await this.riddlesRepository.findOne({ where: { phase } });
    if (!riddle) {
      throw new Error('Riddle not found for this phase');
    }

    const isCorrect = await bcrypt.compare(answerDto.answer, riddle.answer);
    return isCorrect;
  }
}
