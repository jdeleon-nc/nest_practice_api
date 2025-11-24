import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MmaModule } from './mma/mma.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Fighter } from './mma/db/entities/fighter.entity';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    MmaModule,
    ConfigModule.forRoot({}),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'admin1',
      database: 'lwfc_dev',
      entities: [Fighter],
      synchronize: false,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
