import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ExchangeRateDocument = ExchangeRate & Document;

@Schema({ timestamps: true })
export class ExchangeRate {
  @Prop({ required: true })
  compra: number;

  @Prop({ required: true })
  venta: number;

  @Prop({ required: true })
  origen: string;

  @Prop({ required: true })
  moneda: string;

}

export const ExchangeRateSchema = SchemaFactory.createForClass(ExchangeRate);
