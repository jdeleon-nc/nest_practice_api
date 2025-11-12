import { Body, Controller, Get, Post } from '@nestjs/common';
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
  getFighters(): string[] {
    return this.fighterService.getFighters();
  }

  @Post('fighter')
  addFighter(@Body() request: CreateFighterDto): CreateFighterDto {    
    console.log('Request Body:', request);
    return this.fighterService.addFighter(request);
  }
}

  