import { HttpException, Injectable } from '@nestjs/common';
import { CreateFighterDto } from 'src/mma/dtos/create-fighter.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Fighter } from 'src/mma/db/entities/fighter.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FighterService {
  constructor(
    @InjectRepository(Fighter) private fighterRepository: Repository<Fighter>,
  ) {}

  async getFighters(): Promise<CreateFighterDto[]> {
    const fighters = await this.fighterRepository.find({
      select: { id: true, firstName: true, lastName: true, weightClass: true },
    });

    const dbFighters = fighters.map((f) => new CreateFighterDto(f));
    return dbFighters;
  }

  async getFighter(id: number): Promise<CreateFighterDto> {
    const fighter = await this.fighterRepository.findOne({
      where: { id: id },
      select: { id: true, firstName: true, lastName: true, weightClass: true },
    });

    if (!fighter) {
      throw new HttpException('Fighter not found', 404);
    }

    return new CreateFighterDto(fighter);
  }

  async addFighter(
    createFighterDto: CreateFighterDto,
  ): Promise<CreateFighterDto> {
    try {
      const savedFighter = await this.fighterRepository.save(createFighterDto);
      return new CreateFighterDto(savedFighter);
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
