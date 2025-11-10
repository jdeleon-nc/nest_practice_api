import { Test, TestingModule } from '@nestjs/testing';
import { FighterService } from './fighter.service';

describe('FighterService', () => {
  let service: FighterService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FighterService],
    }).compile();

    service = module.get<FighterService>(FighterService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
