import { Repository } from 'typeorm';
import { Product } from '../models/product.entity';
export declare class ProductService {
    private readonly productRepository;
    constructor(productRepository: Repository<Product>);
    findAll(): Promise<Product[]>;
    findOne(id: string): Promise<Product | null>;
    create(product: Product): Promise<Product>;
    update(id: string, product: Product): Promise<Product | null>;
    remove(id: string): Promise<void>;
}
