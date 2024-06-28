import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TransactionDocument = Transaction & Document;

@Schema({ timestamps: true })
export class Transaction {
  @Prop({
    required: true,
    enum: ['USD', 'PEN'],
    validate: {
      validator: function(value: string) {
        return ['USD', 'PEN'].includes(value);
      },
      message: 'Invalid currency. Only USD and PEN are allowed.',
    },
  })
  monedaOrigen: string;

  @Prop({
    required: true,
    enum: ['USD', 'PEN'],
    validate: {
      validator: function(value: string) {
        return ['USD', 'PEN'].includes(value);
      },
      message: 'Invalid currency. Only USD and PEN are allowed.',
    },
  })
  monedaDestino: string;

  @Prop({ required: true })
  monto: number;

  @Prop({ required: true })
  montoCambiado: number;

  @Prop({ required: true })
  tipoCambio: number;

  @Prop({ required: true })
  userId: string;
}

export const TransactionSchema = SchemaFactory.createForClass(Transaction);

TransactionSchema.index({ userId: 1 });
