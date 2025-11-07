import { Test, TestingModule } from '@nestjs/testing';
import { MmaController } from './mma.controller';

describe('MmaController', () => {
  let controller: MmaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MmaController],
    }).compile();

    controller = module.get<MmaController>(MmaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
