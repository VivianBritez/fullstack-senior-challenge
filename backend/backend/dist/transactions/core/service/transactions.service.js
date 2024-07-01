"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionsService = void 0;
const common_1 = require("@nestjs/common");
const exchange_rate_service_1 = require("../../../exchange-rate/core/service/exchange-rate.service");
const transactions_repository_1 = require("../../infrastructure/repository/transactions.repository");
var Currency;
(function (Currency) {
    Currency["USD"] = "USD";
    Currency["PEN"] = "PEN";
})(Currency || (Currency = {}));
let TransactionsService = class TransactionsService {
    constructor(exchangeService, transactionRepository) {
        this.exchangeService = exchangeService;
        this.transactionRepository = transactionRepository;
    }
    async getExchangeRate() {
        try {
            const data = await await this.exchangeService.getData();
            return {
                venta: data[0].venta,
                compra: data[0].compra,
                moneda: data[0].moneda
            };
        }
        catch (error) {
            return error;
        }
    }
    calculateChange(createTransactionDto, data, userId) {
        const { monto, monedaOrigen, monedaDestino } = createTransactionDto;
        if (!Object.values(Currency).includes(monedaOrigen) || !Object.values(Currency).includes(monedaDestino)) {
            throw new Error('Invalid currency. Only USD and PEN are allowed.');
        }
        console.log("calculate change", createTransactionDto, data, userId);
        const typeOfMoney = createTransactionDto.monedaOrigen;
        const exchangeRate = typeOfMoney == 'USD' ? data.compra : data.venta;
        const amountChange = parseFloat((monto * exchangeRate).toFixed(2));
        return Object.assign(Object.assign({}, createTransactionDto), { montoCambiado: amountChange, tipoCambio: exchangeRate, userId: userId });
    }
    async save(createTransactionDto, userId) {
        try {
            const data = await this.getExchangeRate();
            const exchange = this.calculateChange(createTransactionDto, data, userId);
            return await this.transactionRepository.create(exchange);
        }
        catch (error) {
            return error;
        }
    }
    async create(createTransactionDto, userId) {
        try {
            const data = await await this.getExchangeRate();
            const exchange = this.calculateChange(createTransactionDto, data, userId);
            console.log('exchange ===>', exchange);
            return exchange;
        }
        catch (error) {
            return error;
        }
    }
    async findByUserId(userID) {
        try {
            const data = await this.transactionRepository.findByUserId(userID);
            console.log("data", data);
            return data;
        }
        catch (error) {
            return undefined;
        }
    }
    getByUserId(id) {
        return `This action updates a #${id} transaction`;
    }
};
TransactionsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [exchange_rate_service_1.ExchangeRateService,
        transactions_repository_1.TransactionRepository])
], TransactionsService);
exports.TransactionsService = TransactionsService;
//# sourceMappingURL=transactions.service.js.map