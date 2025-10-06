import { Repository } from 'typeorm';
import { Sale } from '../models/sale.entity';
export declare class SaleService {
    private readonly saleRepository;
    constructor(saleRepository: Repository<Sale>);
    findAll(customerId: string): Promise<Sale[]>;
    create(sale: Sale): Promise<Sale>;
}
