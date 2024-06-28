import { Module } from '@nestjs/common';
import { TransactionsService } from './core/service/transactions.service';
import { TransactionsController } from './presentation/transactions.controller';
import { ExchangeRateModule } from 'src/exchange-rate/exchange-rate.module';
import { HttpResponseService } from 'src/shared/httpCode/api-response.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Transaction } from './core/entities/transaction.entity';
import { TransactionSchema } from './infrastructure/scheme/transaction.scheme';
import { TransactionRepository } from './infrastructure/repository/transactions.repository';


@Module({
  imports: [ExchangeRateModule, MongooseModule.forFeature([{ name: Transaction.name, schema: TransactionSchema }]),],
  controllers: [TransactionsController],
  providers: [TransactionsService,  HttpResponseService, TransactionRepository]
})
export class TransactionsModule {}
