"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExchangeRateModule = void 0;
const common_1 = require("@nestjs/common");
const exchange_rate_service_1 = require("./core/service/exchange-rate.service");
const http_request_module_1 = require("../http-request/http-request.module");
const mongoose_1 = require("@nestjs/mongoose");
const change_rate_scheme_1 = require("./infrastructure/schema/change-rate.scheme");
const exchange_repository_1 = require("./infrastructure/repository/exchange.repository");
const change_1 = require("./infrastructure/external-services/change");
const exchange_rate_entity_1 = require("./core/entities/exchange-rate.entity");
const schedule_1 = require("@nestjs/schedule");
let ExchangeRateModule = class ExchangeRateModule {
};
ExchangeRateModule = __decorate([
    (0, common_1.Module)({
        imports: [http_request_module_1.HttpRequestModule, schedule_1.ScheduleModule.forRoot(),
            mongoose_1.MongooseModule.forFeature([{ name: exchange_rate_entity_1.ExchangeRate.name, schema: change_rate_scheme_1.ExchangeRateSchema }]),
        ],
        providers: [exchange_rate_service_1.ExchangeRateService, exchange_repository_1.ExchangeRepository, change_1.ChangeRateInfoService],
        exports: [exchange_rate_service_1.ExchangeRateService, exchange_repository_1.ExchangeRepository]
    })
], ExchangeRateModule);
exports.ExchangeRateModule = ExchangeRateModule;
//# sourceMappingURL=exchange-rate.module.js.map