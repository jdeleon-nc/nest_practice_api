import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MmaController } from './mma/mma.controller';
import { MmaModule } from './mma/mma.module';
import { FighterService } from './services/fighter/fighter.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Fighter } from './db/entities/fighter';

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
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
  controllers: [AppController, MmaController],
  providers: [AppService, FighterService],
})
export class AppModule {}
