// src/transactions/infrastructure/repository/transaction.repository.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Transaction, TransactionDocument } from '../scheme/transaction.scheme'
import { CreateTransactionDto } from 'src/transactions/core/dto/create-transaction.dto';

@Injectable()
export class TransactionRepository {
  constructor(@InjectModel(Transaction.name) private transactionModel: Model<TransactionDocument>) {}

  async create(createTransactionDto: CreateTransactionDto): Promise<Transaction> {
    const createdTransaction = new this.transactionModel(createTransactionDto);
    return createdTransaction.save();
  }

  async findAll(): Promise<Transaction[]> {
    return this.transactionModel.find().exec();
  }

  async findOne(id: string): Promise<Transaction> {
    return this.transactionModel.findOne({ id }).exec();
  }

  async findByUserId(userId: string): Promise<Transaction[]> {
    return this.transactionModel.find({ userId }).sort({ createdAt: 1 }).exec();
  }
  async update(id: string, updateTransactionDto: CreateTransactionDto): Promise<Transaction> {
    return this.transactionModel.findOneAndUpdate({ id }, updateTransactionDto, { new: true }).exec();
  }

  async remove(id: string): Promise<Transaction> {
    return this.transactionModel.findOneAndDelete({ id }).exec();
  }
}
