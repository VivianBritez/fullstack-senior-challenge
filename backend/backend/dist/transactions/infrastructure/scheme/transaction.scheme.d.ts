/// <reference types="mongoose/types/PipelineStage" />
import { Document } from 'mongoose';
export type TransactionDocument = Transaction & Document;
export declare class Transaction {
    monedaOrigen: string;
    monedaDestino: string;
    monto: number;
    montoCambiado: number;
    tipoCambio: number;
    userId: string;
}
export declare const TransactionSchema: import("mongoose").Schema<Transaction, import("mongoose").Model<Transaction, any, any, any>, any, any>;
