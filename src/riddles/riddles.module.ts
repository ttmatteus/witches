import { Module } from '@nestjs/common';
import { RiddlesController } from './riddles.controller';
import { RiddlesService } from './riddles.service';

@Module({
  controllers: [RiddlesController],
  providers: [RiddlesService]
})
export class RiddlesModule {}
