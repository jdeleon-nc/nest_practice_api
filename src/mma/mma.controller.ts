import { Controller, Get } from '@nestjs/common';

@Controller('mma')
export class MmaController {
  constructor() {}

  @Get()
  getMmaInfo(): string {
    return 'MMA Information';
  }
}
