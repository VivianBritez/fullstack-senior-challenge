"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionsModule = void 0;
const common_1 = require("@nestjs/common");
const transactions_service_1 = require("./core/service/transactions.service");
const transactions_controller_1 = require("./presentation/transactions.controller");
const exchange_rate_module_1 = require("../exchange-rate/exchange-rate.module");
const api_response_service_1 = require("../shared/httpCode/api-response.service");
const mongoose_1 = require("@nestjs/mongoose");
const transaction_entity_1 = require("./core/entities/transaction.entity");
const transaction_scheme_1 = require("./infrastructure/scheme/transaction.scheme");
const transactions_repository_1 = require("./infrastructure/repository/transactions.repository");
let TransactionsModule = class TransactionsModule {
};
TransactionsModule = __decorate([
    (0, common_1.Module)({
        imports: [exchange_rate_module_1.ExchangeRateModule, mongoose_1.MongooseModule.forFeature([{ name: transaction_entity_1.Transaction.name, schema: transaction_scheme_1.TransactionSchema }]),],
        controllers: [transactions_controller_1.TransactionsController],
        providers: [transactions_service_1.TransactionsService, api_response_service_1.HttpResponseService, transactions_repository_1.TransactionRepository]
    })
], TransactionsModule);
exports.TransactionsModule = TransactionsModule;
//# sourceMappingURL=transactions.module.js.map