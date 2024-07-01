import { Model } from 'mongoose';
import { CreateExchangeRateDto } from "../../core/dto/create-exchange-rate.dto";
import { ExchangeRate } from 'src/exchange-rate/core/entities/exchange-rate.entity';
export declare class ExchangeRepository {
    private readonly exchangeRateModel;
    constructor(exchangeRateModel: Model<ExchangeRate>);
    create(createChangeRate: CreateExchangeRateDto): Promise<ExchangeRate>;
    findById(id: string): Promise<ExchangeRate | null>;
    findAll(): Promise<ExchangeRate[]>;
    update(id: string, updateUserDto: Partial<ExchangeRate>): Promise<ExchangeRate | null>;
    delete(id: string): Promise<ExchangeRate | null>;
}
