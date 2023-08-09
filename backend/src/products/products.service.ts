import { Injectable } from '@nestjs/common';
import { Product } from './product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productsRepository: Repository<Product>,
  ) {}

  findAll(): Promise<Product[]> {
    return this.productsRepository.find();
  }

  findOne(id: string): Promise<Product> {
    return this.productsRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.productsRepository.delete(id);
  }

  async create(product: Product): Promise<Product> {
    return await this.productsRepository.save(product);
  }

  async update(id: string, product: Product): Promise<Product> {
    const toUpdate = await this.productsRepository.findOne(id);
    const updated = Object.assign(toUpdate, product);
    return await this.productsRepository.save(updated);
  }
}