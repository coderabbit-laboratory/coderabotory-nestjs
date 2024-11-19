import { Module } from '@nestjs/common';
import { ItemController } from './controllers/item.controller';
import { ItemService } from './application/item.service';
import { ItemRepository } from './infrastructure/item.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Item } from './models/item';

@Module({
  imports: [TypeOrmModule.forFeature([Item])],
  controllers: [ItemController],
  providers: [ItemService, ItemRepository],
})
export class ItemModule {}
