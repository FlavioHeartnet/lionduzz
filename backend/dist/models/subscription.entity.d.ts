import { User } from './user.entity';
export declare class Subscription {
    id: string;
    creator: User;
    customer: User;
    status: string;
    createdAt: Date;
    updatedAt: Date;
}
