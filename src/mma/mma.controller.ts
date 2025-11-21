import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Render,
  ValidationPipe,
} from '@nestjs/common';
import { FighterService } from 'src/mma/services/fighter.service';
import { CreateFighterResponseDto } from './dtos/create-fighter-response.dto';
import { CreateFighterRequestDto } from './dtos/create-fighter-request.dto';

@Controller('mma')
export class MmaController {
  constructor(private readonly fighterService: FighterService) {}

  @Get()
  @Render('fighters')
  async getMmaInfo(): Promise<{ fighters: CreateFighterResponseDto[] }> {
    const fighters = await this.fighterService.getFighters();
    return { fighters: fighters };
  }

  @Get('add-fighter')
  @Render('add-fighter')
  getAddFighterPage() {
    return;
  }

  @Get('fighters')
  getFighters(): Promise<CreateFighterResponseDto[]> {
    return this.fighterService.getFighters();
  }

  @Get('fighters/:id')
  getFighter(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<CreateFighterResponseDto> {
    return this.fighterService.getFighter(id);
  }

  @Post('fighter')
  addFighter(
    @Body(new ValidationPipe()) request: CreateFighterRequestDto,
  ): Promise<CreateFighterResponseDto> {
    return this.fighterService.addFighter(request);
  }

  @Delete('fighter/:id')
  deleteFighter(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.fighterService.deleteFighter(id);
  }
}
