import { Model } from 'mongoose';
import { Transaction, TransactionDocument } from '../scheme/transaction.scheme';
import { CreateTransactionDto } from 'src/transactions/core/dto/create-transaction.dto';
export declare class TransactionRepository {
    private transactionModel;
    constructor(transactionModel: Model<TransactionDocument>);
    create(createTransactionDto: CreateTransactionDto): Promise<Transaction>;
    findAll(): Promise<Transaction[]>;
    findOne(id: string): Promise<Transaction>;
    findByUserId(userId: string): Promise<Transaction[]>;
    update(id: string, updateTransactionDto: CreateTransactionDto): Promise<Transaction>;
    remove(id: string): Promise<Transaction>;
}
