import { Test, TestingModule } from '@nestjs/testing';
import { SaleService } from './sale.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Sale } from '../models/sale.entity';

describe('SaleService', () => {
  let service: SaleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        SaleService,
        {
          provide: getRepositoryToken(Sale),
          useValue: {
            find: jest.fn(),
            save: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<SaleService>(SaleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
