import { SaleService } from '../services/sale.service';
import { Sale } from '../models/sale.entity';
export declare class SaleController {
    private readonly saleService;
    constructor(saleService: SaleService);
    findAll(req: any): Promise<Sale[]>;
    create(sale: Sale, req: any): Promise<Sale>;
}
