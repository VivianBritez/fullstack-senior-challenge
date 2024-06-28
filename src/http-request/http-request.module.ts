import { Module } from '@nestjs/common';
import { HttpService } from './core/service/http-request.service';
import { AxiosHttpService } from './adpaters/http-axios.adapter';

@Module({
  providers: [HttpService, AxiosHttpService],
  exports: [HttpService]
})
export class HttpRequestModule {}
