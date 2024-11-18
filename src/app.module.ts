import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { RiddlesModule } from './riddles/riddles.module';
import { AnswersModule } from './answers/answers.module';

@Module({
  imports: [UsersModule, RiddlesModule, AnswersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
