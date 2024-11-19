import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { AppService } from './application/app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import databaseConfig from './config/database';
import { ItemModule } from './item.module';

@Module({
  imports: [TypeOrmModule.forRoot(databaseConfig), ItemModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
