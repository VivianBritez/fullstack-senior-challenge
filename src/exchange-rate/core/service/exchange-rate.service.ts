import { Injectable } from '@nestjs/common';
import { ChangeRateInfoService } from '../../infrastructure/external-services/change';
import { Cron, CronExpression } from '@nestjs/schedule';
import { ExchangeRepository } from 'src/exchange-rate/infrastructure/repository/exchange.repository';

@Injectable()
export class ExchangeRateService {
  constructor(private readonly change: ChangeRateInfoService,
    private readonly exchangeRepository: ExchangeRepository
  ) { }

  private createExchangeDto(data) {
     return {
      moneda: data.moneda,
      venta: data.venta,
      compra: data.compra,
      origen: data.origen
    }

  }
  async findExternalApi() {
    try {
      const data = await this.change.getChangeInfo();
      return data;
    } catch (error) {
      console.log(error)
    }
  }

  async getData() {
    const data = await this.exchangeRepository.findAll();
    return data;
  }

  async getById(id) {
    return await this.exchangeRepository.findById(id)
  }
  @Cron(CronExpression.EVERY_30_SECONDS)
  async add() {
    try {
      const data = await this.findExternalApi();
      const dataDto = this.createExchangeDto(data.data)
      const docExchange = await this.getData();
      if (docExchange.length > 0) {
         await this.update( docExchange, dataDto)
      } else { 
        const saveExchangeRate = await this.exchangeRepository.create(dataDto);
        console.log("save exchangeRate ", saveExchangeRate)
      }

    } catch (error) {
      console.log("error =>", error)
    }
  }

  async update(oldExchange, newDataExchange){
    console.log("Updating exchange rate",oldExchange, newDataExchange )
    const newData= await this.exchangeRepository.update(oldExchange.id, newDataExchange);
    return newData;
  }

}
