import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Item } from '../models/item';
import { Repository } from 'typeorm';
import { CreateItemDto } from '../dtos/create-item.dto';

@Injectable()
export class ItemRepository {
  constructor(
    @InjectRepository(Item)
    private repository: Repository<Item>,
  ) {}

  async find(): Promise<Item[]> {
    return this.repository.find();
  }

  async findOne(id: string): Promise<Item | null> {
    return this.repository.findOne({ where: { id } });
  }

  async create(createItemDto: CreateItemDto) {
    await this.repository.save(createItemDto);
  }
}
