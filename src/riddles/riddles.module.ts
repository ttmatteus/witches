import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RiddlesController } from './riddles.controller';
import { RiddlesService } from './riddles.service';
import { Riddle } from './dto/entities/riddle.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Riddle])],
  controllers: [RiddlesController],
  providers: [RiddlesService],
})
export class RiddlesModule {}
