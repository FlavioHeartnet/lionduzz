import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from '../models/product.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  async findAll(): Promise<Product[]> {
    return this.productRepository.find();
  }

  async findOne(id: string): Promise<Product | null> {
    return this.productRepository.findOne({ where: { id } });
  }

  async create(product: Product): Promise<Product> {
    return this.productRepository.save(product);
  }

  async update(id: string, product: Product): Promise<Product | null> {
    await this.productRepository.update(id, product);
    return this.productRepository.findOne({ where: { id } });
  }

  async remove(id: string): Promise<void> {
    await this.productRepository.delete(id);
  }
}
