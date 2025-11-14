import { HttpException, Injectable } from '@nestjs/common';
import { CreateFighterDto } from 'src/mma/dtos/create-fighter.dto';
import fs from 'fs/promises';
import path from 'path';

@Injectable()
export class FighterService {
  async getFighters(): Promise<CreateFighterDto[]> {
    const filePath = path.resolve(__dirname, '../../../src/db/fighters.json');
    const data = await fs.readFile(filePath, 'utf-8');
    return JSON.parse(data);
  }

  async getFighter(id): Promise<CreateFighterDto> {
    const filePath = path.resolve(__dirname, '../../../src/db/fighters.json');
    const data = await fs.readFile(filePath, 'utf-8');

    const fighters = JSON.parse(data) as CreateFighterDto[];

    if (fighters && fighters.length > 0) {
      const fighter = fighters.find((f) => f.id === parseInt(id));

      if (!fighter) {
        throw new HttpException('Fighter not found', 404);
      }

      return fighter;
    }
    throw new HttpException('No fighters available', 404);
  }

  async addFighter(
    createFighterDto: CreateFighterDto,
  ): Promise<CreateFighterDto> {
    const filePath = path.resolve(__dirname, '../../../src/db/fighters.json');
    const fileData = fs.readFile(filePath, 'utf-8');
    const fighters = JSON.parse(await fileData) as CreateFighterDto[];

    const lastId = fighters.sort((f) => f.id).findLast((f) => f.id)?.id || 0;

    fighters.push(
      new CreateFighterDto({
        id: lastId + 1,
        firstName: createFighterDto.firstName,
        lastName: createFighterDto.lastName,
        age: createFighterDto.age,
      }),
    );

    const finalData = JSON.stringify(fighters, null, 2);
    console.log('Updated Fighters:', finalData);

    try {
      fs.writeFile(filePath, finalData);
    } catch (error) {
      console.error('Error writing to file:', error);
    }

    return createFighterDto;
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
