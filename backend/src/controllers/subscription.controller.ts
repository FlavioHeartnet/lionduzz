import { Controller, Get, Post, Body, Param, Delete, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { SubscriptionService } from '../services/subscription.service';
import { Subscription } from '../models/subscription.entity';

@Controller('subscriptions')
export class SubscriptionController {
  constructor(private readonly subscriptionService: SubscriptionService) {}

  @UseGuards(AuthGuard('jwt'))
  @Get()
  findAll(@Request() req) {
    return this.subscriptionService.findAll(req.user.id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Post()
  create(@Body() subscription: Subscription, @Request() req) {
    subscription.customer = req.user;
    return this.subscriptionService.create(subscription);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.subscriptionService.remove(id);
  }
}
