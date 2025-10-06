import { SubscriptionService } from '../services/subscription.service';
import { Subscription } from '../models/subscription.entity';
export declare class SubscriptionController {
    private readonly subscriptionService;
    constructor(subscriptionService: SubscriptionService);
    findAll(req: any): Promise<Subscription[]>;
    create(subscription: Subscription, req: any): Promise<Subscription>;
    remove(id: string): Promise<void>;
}
