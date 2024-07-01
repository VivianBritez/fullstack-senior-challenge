import { Module, Logger } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ExchangeRateModule } from './exchange-rate/exchange-rate.module';
import { HttpRequestModule } from './http-request/http-request.module';
import { TransactionsModule } from './transactions/transactions.module';
import { envs } from './config/envs'; 
import mongoose from "mongoose";

const logger = new Logger('AppModule');

@Module({
  imports: [
    MongooseModule.forRoot(envs.mongo_url, {
      connectionFactory: async () => {
        mongoose.connection.on('connected', () => {
          logger.log('MongoDB connected');
        });

        mongoose.connection.on('error', (err) => {
          logger.error(`MongoDB connection error: ${err}`);
        });

        mongoose.connection.on('disconnected', () => {
          logger.warn('MongoDB disconnected');
        });

        try {
          await mongoose.connect(envs.mongo_url);
          return mongoose;
        } catch (error) {
          logger.error(`MongoDB connection error: ${error}`);
          throw error;
        }
      },
    }),
    UsersModule,
    AuthModule,
    ExchangeRateModule,
    HttpRequestModule,
    TransactionsModule,
  ],
})
export class AppModule {}
