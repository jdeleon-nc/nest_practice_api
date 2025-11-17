import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Render,
} from '@nestjs/common';
import { FighterService } from 'src/services/fighter/fighter.service';
import { CreateFighterDto } from './dtos/create-fighter.dto';

@Controller('mma')
export class MmaController {
  constructor(private readonly fighterService: FighterService) {}

  @Get()
  @Render('fighters')
  async getMmaInfo(): Promise<{ fighters: CreateFighterDto[] }> {
    const fighters = await this.fighterService.getFighters();
    return { fighters: fighters };
  }

  @Get('add-fighter')
  @Render('add-fighter')
  getAddFighterPage() {
    return;
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

  @Delete('fighter/:id')
  deleteFighter(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.fighterService.deleteFighter(id);
  }
}
