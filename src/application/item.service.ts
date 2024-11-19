import { Injectable } from '@nestjs/common';
import { ItemRepository } from '../infrastructure/item.repository';
import { Item } from '../models/item';

@Injectable()
export class ItemService {
  constructor(private itemRepository: ItemRepository) {}

  async getItems(): Promise<Item[]> {
    return this.itemRepository.find();
  }
}
