import { Test, TestingModule } from '@nestjs/testing';
import { TransactionsController } from '../presentation/transactions.controller';
import { TransactionsService } from '../core/service/transactions.service';
import { CreateTransactionDto } from '../core/dto/create-transaction.dto';
import { NotFoundException } from '@nestjs/common';
import { Currency, Transaction } from '../core/entities/transaction.entity';
import {  HttpResponseService} from "../../shared/httpCode/api-response.service";
import { ExchangeRateService } from '../../exchange-rate/core/service/exchange-rate.service';
import { JwtAuthGuard } from "../../auth/core/domain/jwt-auth.guard";

const mockTransactionsService = {
  create: jest.fn().mockResolvedValue({ /* datos simulados */ }),
  save: jest.fn().mockResolvedValue({ /* datos simulados */ }),
  getExchangeRate: jest.fn().mockResolvedValue({ /* datos simulados */ }),
  findByUserId: jest.fn().mockResolvedValue({ /* datos simulados */ }),
};

const mockHttpResponseService = {
  successResponse: jest.fn((data, message) => ({ data, message })),
  errorResponse: jest.fn(() => ({ error: 'Error' })),
  notFoundResponse: jest.fn(message => ({ message })),
};

describe('TransactionsController', () => {
  let controller: TransactionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TransactionsController],
      providers: [
        { provide: TransactionsService, useValue: mockTransactionsService },
        { provide: HttpResponseService, useValue: mockHttpResponseService },
      ],
    }).compile();

    controller = module.get<TransactionsController>(TransactionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    it('should create a transaction', async () => {
      const mockCreateTransactionDto: CreateTransactionDto = {
        monedaOrigen: Currency.USD,
        monedaDestino: Currency.PEN,
        monto: 100,
      };
      const mockRequest = { userId: 'testUserId' };

      const result = await controller.create(mockCreateTransactionDto, mockRequest);

      expect(result).toBeDefined();
      expect(mockTransactionsService.create).toHaveBeenCalledWith(mockCreateTransactionDto, 'testUserId');
      expect(mockHttpResponseService.successResponse).toHaveBeenCalled();
    });
  });

  describe('save', () => {
    it('should save a transaction', async () => {
      const mockCreateTransactionDto: CreateTransactionDto = {
        monedaOrigen: Currency.USD,
        monedaDestino: Currency.PEN,
        monto: 100,
      };
      const mockRequest = { user: { payload: { id: 'testUserId' } } };

      const result = await controller.save(mockCreateTransactionDto, mockRequest);

      expect(result).toBeDefined();
      expect(mockTransactionsService.save).toHaveBeenCalledWith(mockCreateTransactionDto, 'testUserId');
      expect(mockHttpResponseService.successResponse).toHaveBeenCalled();
    });
  });

  describe('findAll', () => {
    it('should fetch current exchange rate', async () => {
      const result = await controller.findAll();

      expect(result).toBeDefined();
      expect(mockTransactionsService.getExchangeRate).toHaveBeenCalled();
      expect(mockHttpResponseService.successResponse).toHaveBeenCalled();
    });
  });

  describe('getExchangeById', () => {
    it('should fetch transactions by userId', async () => {
      const mockRequest = { user: { payload: { id: 'testUserId' } } };

      const result = await controller.getExchangeById(mockRequest);

      expect(result).toBeDefined();
      expect(mockTransactionsService.findByUserId).toHaveBeenCalledWith('667efda58de92e516c799c6d');
      expect(mockHttpResponseService.successResponse).toHaveBeenCalled();
    });
  });



  it('should return a validation error for negative amount', async () => {
    const mockCreateTransactionDto: CreateTransactionDto = {
      monedaOrigen: Currency.USD,
      monedaDestino: Currency.PEN,
      monto: -100,
    };
    const mockRequest = { userId: 'testUserId' };

    try {
      await controller.create(mockCreateTransactionDto, mockRequest);
    } catch (error) {
      expect(error.status).toBe(400);
      expect(error.response.message).toContain('monto must be a positive number');
      expect(mockTransactionsService.create).not.toHaveBeenCalled();
      expect(mockHttpResponseService.errorResponse).not.toHaveBeenCalled();
    }
  });



  it('should return a validation error for negative amount', async () => {
    const mockCreateTransactionDto: CreateTransactionDto = {
      monedaOrigen: 'INVALID_CURRENCY' as Currency,
      monedaDestino: Currency.PEN,
      monto: 100,
    };
    const mockRequest = { userId: 'testUserId' };

    try {
      await controller.create(mockCreateTransactionDto, mockRequest);
    } catch (error) {
      expect(error.status).toBe(400);
      expect(error.response.message).toContain('monto must be a positive number');
      expect(mockTransactionsService.create).not.toHaveBeenCalled();
      expect(mockHttpResponseService.errorResponse).not.toHaveBeenCalled();
    }
  });

});