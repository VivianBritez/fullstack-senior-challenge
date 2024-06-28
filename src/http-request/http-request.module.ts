import { Module } from '@nestjs/common';
import { HttpService } from './core/service/http-request.service';

@Module({
  providers: [HttpService],
  exports: [HttpService]
})
export class HttpRequestModule {}
