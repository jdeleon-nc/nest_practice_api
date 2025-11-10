import { Controller, Get } from '@nestjs/common';

@Controller('mma')
export class MmaController {
  constructor() {}

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
