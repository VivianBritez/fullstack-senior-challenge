import { Injectable } from '@nestjs/common';
import { HttpService } from 'src/http-request/core/service/http-request.service';
import { envs } from "../../../config/envs";


@Injectable()
export class  ChangeRateInfoService {
  constructor(private http:  HttpService) {}

  async getChangeInfo() {
    try {
        const data = await this.http.getInfo<any>(envs.url_sunat);
        return { data };
      } catch (error) {
        throw new Error(`Error al consultar la URL ${envs.url_sunat}: ${error.message}`);
      }
  }
 
}
