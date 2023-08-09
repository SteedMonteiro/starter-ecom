import { Test, TestingModule } from '@nestjs/testing';
import { ProductsController } from '../src/products/products.controller';
import { ProductsService } from '../src/products/products.service';

describe('ProductsController', () => {
  let productsController: ProductsController;
  let productsService: ProductsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductsController],
      providers: [ProductsService],
    }).compile();

    productsService = module.get<ProductsService>(ProductsService);
    productsController = module.get<ProductsController>(ProductsController);
  });

  describe('getProducts', () => {
    it('should return an array of products', async () => {
      const result = [{ id: 1, name: 'Smart Skipping Rope', price: 100 }];
      jest.spyOn(productsService, 'getProducts').mockImplementation(() => result);

      expect(await productsController.getProducts()).toBe(result);
    });
  });

  describe('getProduct', () => {
    it('should return a product', async () => {
      const result = { id: 1, name: 'Smart Skipping Rope', price: 100 };
      jest.spyOn(productsService, 'getProduct').mockImplementation(() => result);

      expect(await productsController.getProduct(1)).toBe(result);
    });
  });

  describe('createProduct', () => {
    it('should create a product', async () => {
      const result = { id: 1, name: 'Smart Skipping Rope', price: 100 };
      jest.spyOn(productsService, 'createProduct').mockImplementation(() => result);

      expect(await productsController.createProduct(result)).toBe(result);
    });
  });

  describe('updateProduct', () => {
    it('should update a product', async () => {
      const result = { id: 1, name: 'Smart Skipping Rope', price: 100 };
      jest.spyOn(productsService, 'updateProduct').mockImplementation(() => result);

      expect(await productsController.updateProduct(1, result)).toBe(result);
    });
  });

  describe('deleteProduct', () => {
    it('should delete a product', async () => {
      const result = { id: 1, name: 'Smart Skipping Rope', price: 100 };
      jest.spyOn(productsService, 'deleteProduct').mockImplementation(() => result);

      expect(await productsController.deleteProduct(1)).toBe(result);
    });
  });
});