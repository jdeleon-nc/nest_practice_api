import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MmaController } from './mma/mma.controller';
import { MmaModule } from './mma/mma.module';

@Module({
  imports: [MmaModule],
  controllers: [AppController, MmaController],
  providers: [AppService],
})
export class AppModule {}
