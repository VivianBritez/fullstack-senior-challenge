export declare enum Currency {
    USD = "USD",
    PEN = "PEN"
}
export declare class Transaction {
    monedaOrigen: Currency;
    monedaDestino: Currency;
    monto: number;
    montoCambiado: number;
    tipoCambio: number;
    userId: string;
}
