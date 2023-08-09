import { Injectable } from '@nestjs/common';
import { Order } from './interfaces/order.interface';

@Injectable()
export class OrdersService {
  private readonly orders: Order[] = [];

  create(order: Order) {
    this.orders.push(order);
  }

  findAll(): Order[] {
    return this.orders;
  }

  findOne(id: string): Order {
    return this.orders.find(order => order.id === id);
  }

  update(id: string, order: Order) {
    const index = this.orders.findIndex(order => order.id === id);
    if (index !== -1) {
      this.orders[index] = order;
    }
  }

  delete(id: string) {
    const index = this.orders.findIndex(order => order.id === id);
    if (index !== -1) {
      this.orders.splice(index, 1);
    }
  }
}