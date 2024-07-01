import { Module } from '@nestjs/common';
import { ExchangeRateService } from './core/service/exchange-rate.service';
import { HttpRequestModule } from 'src/http-request/http-request.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ExchangeRateSchema } from './infrastructure/schema/change-rate.scheme';
import { ExchangeRepository } from './infrastructure/repository/exchange.repository';
import { ChangeRateInfoService } from './infrastructure/external-services/change';
import { ExchangeRate } from './core/entities/exchange-rate.entity';
import { ScheduleModule } from '@nestjs/schedule';

@Module({

  imports: [HttpRequestModule, ScheduleModule.forRoot(),
    MongooseModule.forFeature([{ name: ExchangeRate.name, schema: ExchangeRateSchema }]),
  ],
  providers: [ExchangeRateService, ExchangeRepository, ChangeRateInfoService],
  exports: [ExchangeRateService,  ExchangeRepository]
})
export class ExchangeRateModule {}
