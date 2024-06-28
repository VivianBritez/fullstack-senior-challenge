import { Test, TestingModule } from '@nestjs/testing';
import { TransactionsService } from '../core/service/transactions.service';
import { ExchangeRateService } from '../../exchange-rate/core/service/exchange-rate.service';
import { TransactionRepository } from '../infrastructure/repository/transactions.repository';
import { CreateTransactionDto } from 'src/transactions/core/dto/create-transaction.dto';
import { NotFoundException } from '@nestjs/common';
import { Currency } from '../core/entities/transaction.entity';

describe('TransactionsService', () => {
  let service: TransactionsService;
  let exchangeRateService: ExchangeRateService;
  let transactionRepository: TransactionRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TransactionsService,
        {
          provide: ExchangeRateService,
          useValue: {
            getData: jest.fn().mockResolvedValue([
              { venta: 3.85, compra: 3.75, moneda: 'USD' }
            ]),
          },
        },
        {
          provide: TransactionRepository,
          useValue: {
            create: jest.fn().mockResolvedValue({}),
            findByUserId: jest.fn().mockResolvedValue([]),
          },
        },
      ],
    }).compile();

    service = module.get<TransactionsService>(TransactionsService);
    exchangeRateService = module.get<ExchangeRateService>(ExchangeRateService);
    transactionRepository = module.get<TransactionRepository>(TransactionRepository);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should get exchange rate', async () => {
    const exchangeRate = await service.getExchangeRate();
    expect(exchangeRate).toEqual({
      venta: 3.85,
      compra: 3.75,
      moneda: 'USD'
    });
  });

  it('should create a transaction when clien change Pen for USD', async () => {
    const createTransactionDto: CreateTransactionDto = {
      monedaOrigen: Currency.PEN,
      monedaDestino: Currency.USD,
      monto: 100,
    };
    const userId = 'someUserId';
    const exchange = await service.create(createTransactionDto, userId);
    expect(exchange).toEqual({
      ...createTransactionDto,
      monto: 100,
      montoCambiado: 385,
      tipoCambio: 3.85,
      userId: 'someUserId'
    });
  });

  it('should save a transaction', async () => {
    const createTransactionDto: CreateTransactionDto = {
      monedaOrigen: Currency.USD,
      monedaDestino: Currency.PEN,
      monto: 100,
    };
    const userId = 'someUserId';
    const result = await service.save(createTransactionDto, userId);
    expect(result).toBeDefined();
    expect(transactionRepository.create).toHaveBeenCalledWith({
      ...createTransactionDto,
      monto: 100,
      montoCambiado: 375,
      tipoCambio: 3.75,
      userId: 'someUserId'
    });
  });

  it('should find transactions by userId', async () => {
    const userId = 'someUserId';
    const transactions = await service.findByUserId(userId);
    expect(transactions).toEqual([]);
    expect(transactionRepository.findByUserId).toHaveBeenCalledWith(userId);
  });

  
  
});
