import { Injectable } from '@nestjs/common';
import { CreateTransactionDto } from '../dto/create-transaction.dto';
import { UpdateTransactionDto } from '../dto/update-transaction.dto';
import { ExchangeRateService } from 'src/exchange-rate/core/service/exchange-rate.service';
import { Transaction } from '../entities/transaction.entity';
import { TransactionRepository } from 'src/transactions/infrastructure/repository/transactions.repository';

@Injectable()
export class TransactionsService {
  constructor(private readonly exchangeService: ExchangeRateService,
    private readonly transactionRepository: TransactionRepository

  ) { }


  async getExchangeRate() {
    try {
      const data = await await this.exchangeService.getData()
      return {
        venta: data[0].venta,
        compra: data[0].compra,
        moneda: data[0].moneda
      }
    } catch (error) {
      return error;
    }

  }

  private calculateChange(createTransactionDto: CreateTransactionDto, data, userId): Transaction {

    console.log("calculate change", createTransactionDto, data, userId)
    const change = createTransactionDto.monto;
    const typeOfMoney = createTransactionDto.monedaOrigen;
    const exchangeRate = typeOfMoney == 'USD' ? data.compra : data.venta
    const amountChange = parseFloat((change * exchangeRate).toFixed(2));
    return {
      ...createTransactionDto,
      monto: change,
      montoCambiado: amountChange,
      tipoCambio: exchangeRate,
      userId: userId
    }
  }

  async save(createTransactionDto: CreateTransactionDto, userId) {
    try {
      const data = await this.getExchangeRate()
      const exchange = this.calculateChange(createTransactionDto, data, userId);
      return await this.transactionRepository.create(exchange)
    } catch (error) {
      return error;
    }
  }

  async create(createTransactionDto: CreateTransactionDto, userId) {
    try {
      const data = await await this.getExchangeRate()
      const exchange = this.calculateChange(createTransactionDto, data, userId);
      console.log('exchange ===>', exchange)
      return exchange;
    } catch (error) {
      return error;
    }
  }

  async findByUserId(userID) {
    try {
      const data =await this.transactionRepository.findByUserId(userID)
      console.log("data", data)
      return data;

    } catch (error) {
      return undefined;
    }
  }







  getByUserId(id: number) {
    return `This action updates a #${id} transaction`;
  }


}
