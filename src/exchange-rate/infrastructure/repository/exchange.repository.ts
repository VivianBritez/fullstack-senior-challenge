import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateExchangeRateDto } from "../../core/dto/create-exchange-rate.dto";

import { ExchangeRate } from 'src/exchange-rate/core/entities/exchange-rate.entity';

@Injectable()
export class ExchangeRepository {
  constructor(@InjectModel('ExchangeRate') private readonly exchangeRateModel: Model<ExchangeRate>) {}

  async create(createChangeRate: CreateExchangeRateDto): Promise<ExchangeRate> {
    const createdExhangeRate = new this.exchangeRateModel(createChangeRate);
    return await createdExhangeRate.save();
  }

  async findById(id: string): Promise<ExchangeRate | null> {
    return await this.exchangeRateModel.findById(id).exec();
  }



  async findAll(): Promise<ExchangeRate[]> {
    return await this.exchangeRateModel.find().exec();
  }

  async update(id: string, updateUserDto: Partial<ExchangeRate>): Promise<ExchangeRate | null> {
    return await this.exchangeRateModel.findByIdAndUpdate(id, updateUserDto, { new: true }).exec();
  }

  async delete(id: string): Promise<ExchangeRate | null> {
    return await this.exchangeRateModel.findByIdAndDelete(id).exec();
  }
}
