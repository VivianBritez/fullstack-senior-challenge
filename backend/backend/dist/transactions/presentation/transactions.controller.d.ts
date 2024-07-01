import { TransactionsService } from '../core/service/transactions.service';
import { CreateTransactionDto } from '../core/dto/create-transaction.dto';
import { HttpResponseService } from '../../shared/httpCode/api-response.service';
export declare class TransactionsController {
    private readonly transactionsService;
    private readonly httpService;
    constructor(transactionsService: TransactionsService, httpService: HttpResponseService);
    create(createTransactionDto: CreateTransactionDto, req: any): Promise<void | {
        statusCode: import("@nestjs/common").HttpStatus;
        message: string;
        data: any;
    }>;
    save(createTransactionDto: CreateTransactionDto, req: any): Promise<void | {
        statusCode: import("@nestjs/common").HttpStatus;
        message: string;
        data: any;
    }>;
    findAll(): Promise<{
        statusCode: import("@nestjs/common").HttpStatus;
        message: string;
        data: any;
    }>;
    getExchangeById(req: any): Promise<void | {
        statusCode: import("@nestjs/common").HttpStatus;
        message: string;
        data: any;
    }>;
}
