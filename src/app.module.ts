import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './users/infrastructure/schemas/user.schema';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { PassportModule } from '@nestjs/passport';
import { ExchangeRateModule } from './exchange-rate/exchange-rate.module';
import { HttpRequestModule } from './http-request/http-request.module';
import { TransactionsModule } from './transactions/transactions.module';
import { UtilsModule } from './utils/utils.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/nest'),
    UsersModule,
    AuthModule,
    ExchangeRateModule,
    HttpRequestModule,
    TransactionsModule,
    UtilsModule
  ],
})
export class AppModule {}
