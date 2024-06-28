import { Controller, Get, Post, Body, Patch, Param, Delete, Request, UseGuards } from '@nestjs/common';
import { TransactionsService } from '../core/service/transactions.service';
import { CreateTransactionDto } from '../core/dto/create-transaction.dto';
import { UpdateTransactionDto } from '../core/dto/update-transaction.dto';
import { HttpResponseService } from '../../shared/httpCode/api-response.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../../auth/core/domain/jwt-auth.guard';

@ApiBearerAuth()
@ApiTags('transactions')
@Controller('transactions')
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService,
    private readonly httpService: HttpResponseService

  ) { }

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() createTransactionDto: CreateTransactionDto, @Request() req) {
    const userId = req.userId
    try {
      const data = await this.transactionsService.create(createTransactionDto, userId);
      return this.httpService.successResponse(data, 'Calculated')
    } catch (error) {
      return this.httpService.errorResponse()
    }

  }

  @UseGuards(JwtAuthGuard)
  @Post('save')
  async save(@Body() createTransactionDto: CreateTransactionDto, @Request() req) {
    const userId = req.user.payload.id
    try {
      const data = await this.transactionsService.save(createTransactionDto, userId);
      return this.httpService.successResponse(data, 'Calculated')
    } catch (error) {
      return this.httpService.errorResponse()
    }

  }


  @Get('current-change')
  async findAll() {
    try {
      const data = await this.transactionsService.getExchangeRate();
      return this.httpService.successResponse(data, 'Current exchange rate')

    } catch (error) {

    }

  }

  @UseGuards(JwtAuthGuard)
  @Get('byUser')
  async getExchangeById(@Request() req) {

    const transaction = await this.transactionsService.findByUserId(req.user.payload.id);
    if (!transaction) {
      return this.httpService.notFoundResponse(`Transaction with ID ${req.user.payload.id} not found`);
    }
    return this.httpService.successResponse(transaction, 'List of transaccions')
  }




}
