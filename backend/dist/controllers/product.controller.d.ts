import { ProductService } from '../services/product.service';
import { Product } from '../models/product.entity';
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    findAll(): Promise<Product[]>;
    findOne(id: string): Promise<Product | null>;
    create(product: Product): Promise<Product>;
    update(id: string, product: Product): Promise<Product | null>;
    remove(id: string): Promise<void>;
}
