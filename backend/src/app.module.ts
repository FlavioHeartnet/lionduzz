import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthController } from './controllers/auth.controller';
import { ProductController } from './controllers/product.controller';
import { SaleController } from './controllers/sale.controller';
import { SubscriptionController } from './controllers/subscription.controller';
import { AuthService } from './services/auth.service';
import { ProductService } from './services/product.service';
import { SaleService } from './services/sale.service';
import { SubscriptionService } from './services/subscription.service';
import { User } from './models/user.entity';
import { Product } from './models/product.entity';
import { Sale } from './models/sale.entity';
import { Subscription } from './models/subscription.entity';

import { StripeModule } from '@reyco1/nestjs-stripe';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'user',
      password: 'password',
      database: 'lionduzz',
      entities: [User, Product, Sale, Subscription],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([User, Product, Sale, Subscription]),
    StripeModule.forRoot({
      apiKey: 'test',
    }),
  ],
  controllers: [AppController, AuthController, ProductController, SaleController, SubscriptionController],
  providers: [AppService, AuthService, ProductService, SaleService, SubscriptionService],
})
export class AppModule {}