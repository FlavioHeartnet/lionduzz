import { User } from './user.entity';
export declare class Product {
    id: string;
    name: string;
    description: string;
    price: number;
    type: string;
    creator: User;
    createdAt: Date;
    updatedAt: Date;
}
