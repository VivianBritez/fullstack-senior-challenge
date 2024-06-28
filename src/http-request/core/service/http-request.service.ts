import { Injectable } from '@nestjs/common';
import { AxiosHttpService } from 'src/http-request/adpaters/http-axios.adapter';


@Injectable()
export class HttpService {
  constructor(
     private readonly httpService: AxiosHttpService,
  ) {}

  getInfo<T>(url: string, options?: any): Promise<T> {
    return this.httpService.get(url, options);
  }

  post<T>(url: string, data: any, options?: any): Promise<T> {
    return this.httpService.post(url, data, options);
  }

  put<T>(url: string, data: any, options?: any): Promise<T> {
    return this.httpService.put(url, data, options);
  }

  delete<T>(url: string, options?: any): Promise<T> {
    return this.httpService.delete(url, options);
  }
}
