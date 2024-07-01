import { CreateTransactionDto } from '../dto/create-transaction.dto';
import { ExchangeRateService } from '../../../exchange-rate/core/service/exchange-rate.service';
import { TransactionRepository } from '../../infrastructure/repository/transactions.repository';
export declare class TransactionsService {
    private readonly exchangeService;
    private readonly transactionRepository;
    constructor(exchangeService: ExchangeRateService, transactionRepository: TransactionRepository);
    getExchangeRate(): Promise<any>;
    private calculateChange;
    save(createTransactionDto: CreateTransactionDto, userId: any): Promise<any>;
    create(createTransactionDto: CreateTransactionDto, userId: any): Promise<any>;
    findByUserId(userID: any): Promise<import("../../infrastructure/scheme/transaction.scheme").Transaction[]>;
    getByUserId(id: number): string;
}
