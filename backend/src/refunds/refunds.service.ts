import { Injectable } from '@nestjs/common';
import { Refund } from './refund.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class RefundsService {
  constructor(
    @InjectRepository(Refund)
    private refundsRepository: Repository<Refund>,
  ) {}

  async create(refund: Refund): Promise<Refund> {
    return await this.refundsRepository.save(refund);
  }

  async findAll(): Promise<Refund[]> {
    return await this.refundsRepository.find();
  }

  async findOne(id: string): Promise<Refund> {
    return await this.refundsRepository.findOne(id);
  }

  async update(id: string, refund: Refund): Promise<void> {
    await this.refundsRepository.update(id, refund);
  }

  async remove(id: string): Promise<void> {
    await this.refundsRepository.delete(id);
  }
}