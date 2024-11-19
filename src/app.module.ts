import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { AppService } from './application/app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import databaseConfig from './config/database';

@Module({
  imports: [TypeOrmModule.forRoot(databaseConfig)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
