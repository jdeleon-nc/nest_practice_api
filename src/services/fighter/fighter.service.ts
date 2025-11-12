import { Injectable } from '@nestjs/common';
import { CreateFighterDto } from 'src/mma/dtos/create-fighter.dto';

@Injectable()
export class FighterService {
  getFighters(): string[] {
    const champions = ['Tom Aspinall, Illia Topuria, JDM, Alex Pereira'];
    return champions;
  }

  addFighter(createFighterDto: CreateFighterDto): CreateFighterDto {
    const fighters = ['New Fighter 1, New Fighter 2'];
    const fighter = { ...createFighterDto };
    return fighter;
  }
}
