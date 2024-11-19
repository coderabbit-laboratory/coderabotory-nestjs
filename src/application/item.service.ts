import { Injectable } from '@nestjs/common';
import { Item } from '../models/item';
import { ItemRepository } from '../infrastructure/item.repository';

@Injectable()
export class ItemService {
  constructor(private itemRepository: ItemRepository) {}

  async getItems(): Promise<Item[]> {
    return this.itemRepository.find();
  }
}
