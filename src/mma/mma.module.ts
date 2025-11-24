import { Module } from '@nestjs/common';
import { FighterService } from 'src/mma/services/fighter.service';
import { MmaController } from './mma.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Fighter } from 'src/mma/db/entities/fighter.entity';
import { PrismaService } from './services/prisma-service';

@Module({
  imports: [TypeOrmModule.forFeature([Fighter])],
  controllers: [MmaController],
  providers: [FighterService, PrismaService],
})
export class MmaModule {}
