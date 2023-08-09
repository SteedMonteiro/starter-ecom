import { Test, TestingModule } from '@nestjs/testing';
import { RefundsController } from '../src/refunds/refunds.controller';
import { RefundsService } from '../src/refunds/refunds.service';

describe('RefundsController', () => {
  let refundsController: RefundsController;
  let refundsService: RefundsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RefundsController],
      providers: [RefundsService],
    }).compile();

    refundsService = module.get<RefundsService>(RefundsService);
    refundsController = module.get<RefundsController>(RefundsController);
  });

  describe('refund', () => {
    it('should return an array of refunds', async () => {
      const result = ['test'];
      jest.spyOn(refundsService, 'getRefunds').mockImplementation(() => result);

      expect(await refundsController.getRefunds()).toBe(result);
    });
  });
});