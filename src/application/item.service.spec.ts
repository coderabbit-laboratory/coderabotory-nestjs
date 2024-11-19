import { Test } from '@nestjs/testing';
import { ItemService } from './item.service';
import { ItemRepository } from '../infrastructure/item.repository';

describe('ItemService', () => {
  let itemService: ItemService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        ItemService,
        {
          provide: ItemRepository,
          useValue: {
            find: jest.fn().mockResolvedValue([]),
          },
        },
      ],
    }).compile();

    itemService = module.get<ItemService>(ItemService);
  });

  describe('getItems', () => {
    it('returns a collection of item', async () => {
      const items = await itemService.getItems();

      expect(Array.isArray(items)).toBe(true);
    });
  });
});
