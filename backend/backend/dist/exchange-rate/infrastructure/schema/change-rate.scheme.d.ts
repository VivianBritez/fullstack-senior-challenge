/// <reference types="mongoose/types/PipelineStage" />
import { Document } from 'mongoose';
export type ExchangeRateDocument = ExchangeRate & Document;
export declare class ExchangeRate {
    compra: number;
    venta: number;
    origen: string;
    moneda: string;
}
export declare const ExchangeRateSchema: import("mongoose").Schema<ExchangeRate, import("mongoose").Model<ExchangeRate, any, any, any>, any, any>;
