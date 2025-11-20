import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MmaController } from './mma/mma.controller';
import { MmaModule } from './mma/mma.module';
import { FighterService } from './mma/services/fighter.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Fighter } from './mma/db/entities/fighter.entity';

@Module({
  imports: [
    MmaModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'admin1',
      database: 'top_users',
      entities: [Fighter],
      synchronize: true,
    }),
  ],
  controllers: [AppController, MmaController],
  providers: [AppService, FighterService],
})
export class AppModule {}
