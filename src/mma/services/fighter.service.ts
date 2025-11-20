import { HttpException, Injectable } from '@nestjs/common';
import { CreateFighterDto } from 'src/mma/dtos/create-fighter.dto';
import fs from 'fs/promises';
import path from 'path';
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

    if (fighters != null && fighters.length > 0) {
      const dbFighters = fighters.map(
        (f) =>
          new CreateFighterDto({
            id: f.id,
            firstName: f.firstName,
            lastName: f.lastName,
            weightClass: f.weightClass,
          }),
      );
      return dbFighters;
    }

    throw new HttpException('No fighters available', 404);
  }

  async getFighter(id: number): Promise<CreateFighterDto> {
    const fighters = await this.fighterRepository.find({
      select: { id: true, firstName: true, lastName: true, weightClass: true },
    });

    if (fighters != null && fighters.length > 0) {
      const fighter = fighters.find((f) => f.id === id);

      if (!fighter) {
        throw new HttpException('Fighter not found', 404);
      }

      return fighter as CreateFighterDto;
    }

    throw new HttpException('No fighters available', 404);
  }

  async addFighter(
    createFighterDto: CreateFighterDto,
  ): Promise<CreateFighterDto> {
    try {
      return this.fighterRepository.save({
        firstName: createFighterDto.firstName,
        lastName: createFighterDto.lastName,
        age: createFighterDto.age,
        weightClass: createFighterDto.weightClass,
      });
    } catch (error) {
      throw new HttpException('Error saving fighter', 500);
    }
  }

  async deleteFighter(id: number): Promise<void> {
    const filePath = path.resolve(__dirname, '../../../src/db/fighters.json');
    const fileData = fs.readFile(filePath, 'utf-8');
    const fighters = JSON.parse(await fileData) as CreateFighterDto[];

    const index = fighters.findIndex((f) => f.id === id);
    if (index === -1) {
      throw new HttpException('Fighter not found', 404);
    }
    fighters.splice(index, 1);
    const finalData = JSON.stringify(fighters, null, 2);

    try {
      fs.writeFile(filePath, finalData);
    } catch (error) {
      console.error('Error writing to file:', error);
    }
  }
}
