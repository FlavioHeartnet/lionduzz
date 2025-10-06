import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Subscription } from '../models/subscription.entity';

@Injectable()
export class SubscriptionService {
  constructor(
    @InjectRepository(Subscription)
    private readonly subscriptionRepository: Repository<Subscription>,
  ) {}

  async findAll(customerId: string): Promise<Subscription[]> {
    return this.subscriptionRepository.find({ where: { customer: { id: customerId } } });
  }

  async create(subscription: Subscription): Promise<Subscription> {
    return this.subscriptionRepository.save(subscription);
  }

  async remove(id: string): Promise<void> {
    await this.subscriptionRepository.delete(id);
  }
}
