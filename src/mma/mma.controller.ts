import { Controller, Get } from '@nestjs/common';
import { FighterService } from 'src/services/fighter/fighter.service';

@Controller('mma')
export class MmaController {
  constructor(private readonly fighterService: FighterService) {}

  @Get()
  getMmaInfo(): string {
    return 'MMA Information';
  }

  @Get('fighters')
  getFighters(): string[] {
    const champions = ['Tom Aspinall, Illia Topuria, JDM, Alex Pereira'];
    return champions;
  }
}
