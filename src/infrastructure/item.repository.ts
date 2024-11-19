import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Item } from '../models/item';
import { Repository } from 'typeorm';

@Injectable()
export class ItemRepository {
  constructor(
    @InjectRepository(Item)
    private repository: Repository<Item>,
  ) {}

  async find(): Promise<Item[]> {
    return this.repository.find();
  }
}
