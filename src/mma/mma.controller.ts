import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { FighterService } from 'src/services/fighter/fighter.service';
import { CreateFighterDto } from './dtos/create-fighter.dto';


@Controller('mma')
export class MmaController {
  constructor(private readonly fighterService: FighterService) {}

  @Get()
  getMmaInfo(): string {
    return 'MMA Information';
  }

  @Get('fighters')
  getFighters(): Promise<CreateFighterDto[]> {
    return this.fighterService.getFighters();
  }

  @Get('fighters/:id')
  getFighter(@Param('id') id: string): Promise<CreateFighterDto> {
    return this.fighterService.getFighter(id);
  }

  @Post('fighter')
  addFighter(@Body() request: CreateFighterDto): Promise<CreateFighterDto> {    
    return this.fighterService.addFighter(request);
  }
}

  