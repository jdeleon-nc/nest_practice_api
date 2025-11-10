import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MmaController } from './mma/mma.controller';
import { MmaModule } from './mma/mma.module';
import { FighterService } from './fighter/fighter.service';

@Module({
  imports: [MmaModule],
  controllers: [AppController, MmaController],
  providers: [AppService, FighterService],
})
export class AppModule {}
