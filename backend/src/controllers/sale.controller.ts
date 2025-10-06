import { Controller, Get, Post, Body, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { SaleService } from '../services/sale.service';
import { Sale } from '../models/sale.entity';

@Controller('sales')
export class SaleController {
  constructor(private readonly saleService: SaleService) {}

  @UseGuards(AuthGuard('jwt'))
  @Get()
  findAll(@Request() req) {
    return this.saleService.findAll(req.user.id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Post()
  create(@Body() sale: Sale, @Request() req) {
    sale.customer = req.user;
    return this.saleService.create(sale);
  }
}
