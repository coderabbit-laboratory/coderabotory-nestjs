import { ItemController } from '../controllers/item.controller';
import { ItemService } from '../application/item.service';
import { Test } from '@nestjs/testing';
import { ItemRepository } from '../infrastructure/item.repository';

describe('ItemController', () => {
  let itemController: ItemController;
  let itemService: ItemService;

  beforeEach(async () => {
    const item = await Test.createTestingModule({
      controllers: [ItemController],
      providers: [ItemService, ItemRepository],
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
