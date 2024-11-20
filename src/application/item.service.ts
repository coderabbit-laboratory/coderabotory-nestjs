import { Injectable, NotFoundException } from '@nestjs/common';
import { Item } from '../models/item';
import { ItemRepository } from '../infrastructure/item.repository';

@Injectable()
export class ItemService {
  constructor(private itemRepository: ItemRepository) {}

  async getItems(): Promise<Item[]> {
    return this.itemRepository.find();
  }

  async getItem(id: string): Promise<Item> {
    const item = await this.itemRepository.findOne(id);

    if (!item) {
      throw new NotFoundException(`the item is not found: ${id}`);
    }

    return item;
  }
}
