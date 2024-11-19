import { Controller, Get } from '@nestjs/common';
import { ItemService } from '../application/item.service';
import { Item } from '../models/item';

@Controller('items')
export class ItemController {
  constructor(private itemService: ItemService) {}

  @Get()
  findAll(): Promise<Item[]> {
    return this.itemService.getItems();
  }
}
