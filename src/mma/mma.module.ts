import { Module } from '@nestjs/common';
import { FighterService } from 'src/services/fighter/fighter.service';
import { MmaController } from './mma.controller';
import { CreateFighterDto } from './dtos/create-fighter.dto';

@Module({})
export class MmaModule {
  classes: [MmaController];
  providers: [FighterService];
}
