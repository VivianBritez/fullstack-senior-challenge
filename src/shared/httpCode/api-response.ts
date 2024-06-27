import { Module } from '@nestjs/common';
import { HttpResponseService } from './api-response.service';

@Module({
  providers: [HttpResponseService],
  exports: [HttpResponseService],
})
export class HttpResponseModule {}
