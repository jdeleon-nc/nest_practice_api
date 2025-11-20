import { Module } from '@nestjs/common';
import { FighterService } from 'src/services/fighter/fighter.service';
import { MmaController } from './mma.controller';
import { CreateFighterDto } from './dtos/create-fighter.dto';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Fighter } from 'src/db/entities/fighter.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Fighter])],
  controllers: [MmaController],
  providers: [FighterService],
})
export class MmaModule {}
