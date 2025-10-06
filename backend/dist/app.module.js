"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const auth_controller_1 = require("./controllers/auth.controller");
const product_controller_1 = require("./controllers/product.controller");
const sale_controller_1 = require("./controllers/sale.controller");
const subscription_controller_1 = require("./controllers/subscription.controller");
const auth_service_1 = require("./services/auth.service");
const product_service_1 = require("./services/product.service");
const sale_service_1 = require("./services/sale.service");
const subscription_service_1 = require("./services/subscription.service");
const user_entity_1 = require("./models/user.entity");
const product_entity_1 = require("./models/product.entity");
const sale_entity_1 = require("./models/sale.entity");
const subscription_entity_1 = require("./models/subscription.entity");
const nestjs_stripe_1 = require("@reyco1/nestjs-stripe");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: 'localhost',
                port: 5432,
                username: 'user',
                password: 'password',
                database: 'lionduzz',
                entities: [user_entity_1.User, product_entity_1.Product, sale_entity_1.Sale, subscription_entity_1.Subscription],
                synchronize: true,
            }),
            typeorm_1.TypeOrmModule.forFeature([user_entity_1.User, product_entity_1.Product, sale_entity_1.Sale, subscription_entity_1.Subscription]),
            nestjs_stripe_1.StripeModule.forRoot({
                apiKey: 'test',
            }),
        ],
        controllers: [app_controller_1.AppController, auth_controller_1.AuthController, product_controller_1.ProductController, sale_controller_1.SaleController, subscription_controller_1.SubscriptionController],
        providers: [app_service_1.AppService, auth_service_1.AuthService, product_service_1.ProductService, sale_service_1.SaleService, subscription_service_1.SubscriptionService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map