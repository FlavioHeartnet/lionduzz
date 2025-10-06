import { Repository } from 'typeorm';
import { Subscription } from '../models/subscription.entity';
export declare class SubscriptionService {
    private readonly subscriptionRepository;
    constructor(subscriptionRepository: Repository<Subscription>);
    findAll(customerId: string): Promise<Subscription[]>;
    create(subscription: Subscription): Promise<Subscription>;
    remove(id: string): Promise<void>;
}
