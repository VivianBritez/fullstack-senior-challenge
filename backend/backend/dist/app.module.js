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
const mongoose_1 = require("@nestjs/mongoose");
const users_module_1 = require("./users/users.module");
const auth_module_1 = require("./auth/auth.module");
const exchange_rate_module_1 = require("./exchange-rate/exchange-rate.module");
const http_request_module_1 = require("./http-request/http-request.module");
const transactions_module_1 = require("./transactions/transactions.module");
const envs_1 = require("./config/envs");
const mongoose_2 = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const logger = new common_1.Logger('AppModule');
console.log("env", envs_1.envs, process.env);
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forRoot(envs_1.envs.mongo_url, {
                connectionFactory: async () => {
                    mongoose_2.default.connection.on('connected', () => {
                        logger.log('MongoDB connected');
                    });
                    mongoose_2.default.connection.on('error', (err) => {
                        logger.error(`MongoDB connection error: ${err}`);
                    });
                    mongoose_2.default.connection.on('disconnected', () => {
                        logger.warn('MongoDB disconnected');
                    });
                    try {
                        await mongoose_2.default.connect(envs_1.envs.mongo_url);
                        return mongoose_2.default;
                    }
                    catch (error) {
                        logger.error(`MongoDB connection error: ${error}`);
                        throw error;
                    }
                },
            }),
            users_module_1.UsersModule,
            auth_module_1.AuthModule,
            exchange_rate_module_1.ExchangeRateModule,
            http_request_module_1.HttpRequestModule,
            transactions_module_1.TransactionsModule,
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map