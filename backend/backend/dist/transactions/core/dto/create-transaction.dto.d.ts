declare enum Currency {
    USD = "USD",
    PEN = "PEN"
}
export declare class CreateTransactionDto {
    monedaOrigen: Currency;
    monedaDestino: Currency;
    monto: number;
}
export {};
