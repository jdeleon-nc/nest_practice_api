import { Module } from '@nestjs/common';
import { FighterService } from 'src/fighter/fighter.service';

@Module({})
export class MmaModule {
  providers: [FighterService];
}
