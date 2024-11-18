import { Test, TestingModule } from '@nestjs/testing';
import { RiddlesController } from './riddles.controller';

describe('RiddlesController', () => {
  let controller: RiddlesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RiddlesController],
    }).compile();

    controller = module.get<RiddlesController>(RiddlesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
