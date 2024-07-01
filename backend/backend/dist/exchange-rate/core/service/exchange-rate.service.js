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
exports.ExchangeRateService = void 0;
const common_1 = require("@nestjs/common");
const change_1 = require("../../infrastructure/external-services/change");
const schedule_1 = require("@nestjs/schedule");
const exchange_repository_1 = require("../../infrastructure/repository/exchange.repository");
let ExchangeRateService = class ExchangeRateService {
    constructor(change, exchangeRepository) {
        this.change = change;
        this.exchangeRepository = exchangeRepository;
    }
    createExchangeDto(data) {
        return {
            moneda: data.moneda,
            venta: data.venta,
            compra: data.compra,
            origen: data.origen
        };
    }
    async findExternalApi() {
        try {
            const data = await this.change.getChangeInfo();
            return data;
        }
        catch (error) {
            console.log(error);
        }
    }
    async getData() {
        const data = await this.exchangeRepository.findAll();
        return data;
    }
    async getById(id) {
        return await this.exchangeRepository.findById(id);
    }
    async add() {
        try {
            const data = await this.findExternalApi();
            const dataDto = this.createExchangeDto(data.data);
            const docExchange = await this.getData();
            if (docExchange.length > 0) {
                await this.update(docExchange, dataDto);
            }
            else {
                const saveExchangeRate = await this.exchangeRepository.create(dataDto);
                console.log("save exchangeRate ", saveExchangeRate);
            }
        }
        catch (error) {
            console.log("error =>", error);
        }
    }
    async update(oldExchange, newDataExchange) {
        console.log("Updating exchange rate", oldExchange, newDataExchange);
        const newData = await this.exchangeRepository.update(oldExchange.id, newDataExchange);
        return newData;
    }
};
__decorate([
    (0, schedule_1.Cron)(schedule_1.CronExpression.EVERY_30_SECONDS),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ExchangeRateService.prototype, "add", null);
ExchangeRateService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [change_1.ChangeRateInfoService,
        exchange_repository_1.ExchangeRepository])
], ExchangeRateService);
exports.ExchangeRateService = ExchangeRateService;
//# sourceMappingURL=exchange-rate.service.js.map