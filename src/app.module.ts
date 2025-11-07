import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MmaController } from './mma/mma.controller';

@Module({
  imports: [],
  controllers: [AppController, MmaController],
  providers: [AppService],
})
export class AppModule {}
