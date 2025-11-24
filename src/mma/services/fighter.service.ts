import { HttpException, Injectable } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Fighter } from 'src/mma/db/entities/fighter.entity';
import { Repository } from 'typeorm';
import { CreateFighterResponseDto } from '../dtos/create-fighter-response.dto';
import { CreateFighterRequestDto } from '../dtos/create-fighter-request.dto';
import { PrismaService } from './prisma-service';
import { create } from 'domain';

@Injectable()
export class FighterService {
  constructor(
    @InjectRepository(Fighter) private fighterRepository: Repository<Fighter>,
    private prismaService: PrismaService,
  ) {}

  async getFighters(): Promise<CreateFighterResponseDto[]> {
    const fighters = await this.prismaService.fighter.findMany({
      select: {
        id: true,
        firstName: true,
        lastName: true,
        age: true,
        weightClass: true,
      },
    });

    const response = fighters.map(
      (f) =>
        new CreateFighterResponseDto({
          firstName: f.firstName,
          lastName: f.lastName,
          age: f.age,
          id: f.id,
          weightClassId: f.weightClass.id,
        }),
    );
    return response;
  }

  async getFighter(id: number): Promise<CreateFighterResponseDto> {
    const fighter = await this.prismaService.fighter.findUnique({
      where: { id: id },
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
      const savedFighter = await this.prismaService.fighter.create({
        data: {
          firstName: createFighterRequestDto.firstName,
          lastName: createFighterRequestDto.lastName,
          age: createFighterRequestDto.age,
          weightClass: {
            connect: { id: createFighterRequestDto.weightClassId },
          },
        },
      });

      return new CreateFighterResponseDto(savedFighter);
    } catch (error) {
      throw new HttpException('Error saving fighter', 500);
    }
  }

  async deleteFighter(id: number): Promise<void> {
    try {
      await this.prismaService.fighter.delete({
        where: { id: id },
      });
    } catch (error) {
      throw new HttpException('Error deleting fighter', 500);
    }
  }
}
