import { ItemController } from '../controllers/item.controller';
import { ItemService } from '../application/item.service';
import { Test } from '@nestjs/testing';
import { ItemRepository } from '../infrastructure/item.repository';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Item } from '../models/item';

describe('ItemController', () => {
  let itemController: ItemController;
  let itemService: ItemService;

  const mockRepository = {
    find: jest.fn(),
  };

  beforeEach(async () => {
    const item = await Test.createTestingModule({
      controllers: [ItemController],
      providers: [
        ItemService,
        ItemRepository,
        {
          provide: getRepositoryToken(Item),
          useValue: mockRepository,
        },
      ],
    }).compile();

    itemService = item.get<ItemService>(ItemService);
    itemController = item.get<ItemController>(ItemController);
  });

  describe('findAll', () => {
    it('should return a collection of item', async () => {
      jest.spyOn(itemService, 'getItems').mockResolvedValue([]);
      const items = await itemController.findAll();

      expect(Array.isArray(items)).toBe(true);
    });
  });
});
