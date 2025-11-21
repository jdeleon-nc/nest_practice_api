import { HttpException, Injectable } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Fighter } from 'src/mma/db/entities/fighter.entity';
import { Repository } from 'typeorm';
import { CreateFighterResponseDto } from '../dtos/create-fighter-response.dto';
import { CreateFighterRequestDto } from '../dtos/create-fighter-request.dto';

@Injectable()
export class FighterService {
  constructor(
    @InjectRepository(Fighter) private fighterRepository: Repository<Fighter>,
  ) {}

  async getFighters(): Promise<CreateFighterResponseDto[]> {
    const fighters = await this.fighterRepository.find({
      select: { id: true, firstName: true, lastName: true, weightClass: true },
    });

    const dbFighters = fighters.map((f) => new CreateFighterResponseDto(f));
    return dbFighters;
  }

  async getFighter(id: number): Promise<CreateFighterResponseDto> {
    const fighter = await this.fighterRepository.findOne({
      where: { id: id },
      select: { id: true, firstName: true, lastName: true, weightClass: true },
    });

    if (!fighter) {
      throw new HttpException('Fighter not found', 404);
    }

    return new CreateFighterResponseDto(fighter);
  }

  async addFighter(
    createFighterRequestDto: CreateFighterRequestDto,
  ): Promise<CreateFighterResponseDto> {
    try {
      const savedFighter = await this.fighterRepository.save(
        createFighterRequestDto,
      );
      return new CreateFighterResponseDto(savedFighter);
    } catch (error) {
      throw new HttpException('Error saving fighter', 500);
    }
  }

  async deleteFighter(id: number): Promise<void> {
    try {
      const result = await this.fighterRepository.delete(id);
      if (result.affected === 0) {
        throw new HttpException('Fighter not found', 404);
      }
    } catch (error) {
      throw new HttpException('Error deleting fighter', 500);
    }
  }
}
