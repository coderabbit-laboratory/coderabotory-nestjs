import { Injectable } from '@nestjs/common';
import { Item } from 'src/models/item';
import { Repository } from 'typeorm';

@Injectable()
export class ItemRepository extends Repository<Item> {
}
