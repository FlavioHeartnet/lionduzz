import { User } from './user.entity';
import { Product } from './product.entity';
export declare class Sale {
    id: string;
    product: Product;
    customer: User;
    price: number;
    createdAt: Date;
}
