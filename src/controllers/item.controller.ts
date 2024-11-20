import { Controller, Get, Param } from '@nestjs/common';
import { ItemService } from '../application/item.service';
import { Item } from '../models/item';

@Controller('items')
export class ItemController {
  constructor(private itemService: ItemService) {}

  @Get()
  async findAll(): Promise<Item[]> {
    return await this.itemService.getItems();
  }

  @Get(':id')
  async find(@Param('id') id: string): Promise<Item> {
    return await this.itemService.getItem(id);
  }
}
