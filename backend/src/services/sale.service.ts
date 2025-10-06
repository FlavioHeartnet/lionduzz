import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Sale } from '../models/sale.entity';

@Injectable()
export class SaleService {
  constructor(
    @InjectRepository(Sale)
    private readonly saleRepository: Repository<Sale>,
  ) {}

  async findAll(customerId: string): Promise<Sale[]> {
    return this.saleRepository.find({ where: { customer: { id: customerId } } });
  }

  async create(sale: Sale): Promise<Sale> {
    return this.saleRepository.save(sale);
  }
}
