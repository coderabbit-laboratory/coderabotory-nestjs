import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

import { ItemService } from '../application/item.service';

import { Item } from '../models/item';
import { CreateItemDto } from '../dtos/create-item.dto';
import { UpdateItemDto } from 'src/dtos/update-item.dto';

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

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createItemDto: CreateItemDto) {
    await this.itemService.createItem(createItemDto);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateItemDto: UpdateItemDto) {
    await this.itemService.updateItem(id, updateItemDto);
  }
}
