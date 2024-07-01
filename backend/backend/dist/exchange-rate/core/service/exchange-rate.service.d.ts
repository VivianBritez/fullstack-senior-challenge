import { ChangeRateInfoService } from '../../infrastructure/external-services/change';
import { ExchangeRepository } from '../../infrastructure/repository/exchange.repository';
export declare class ExchangeRateService {
    private readonly change;
    private readonly exchangeRepository;
    constructor(change: ChangeRateInfoService, exchangeRepository: ExchangeRepository);
    private createExchangeDto;
    findExternalApi(): Promise<{
        data: any;
    }>;
    getData(): Promise<import("../entities/exchange-rate.entity").ExchangeRate[]>;
    getById(id: any): Promise<import("../entities/exchange-rate.entity").ExchangeRate>;
    add(): Promise<void>;
    update(oldExchange: any, newDataExchange: any): Promise<import("../entities/exchange-rate.entity").ExchangeRate>;
}
