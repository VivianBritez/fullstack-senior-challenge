export enum Currency {
  USD = 'USD',
  PEN = 'PEN',
}

export class Transaction {
  monedaOrigen: Currency;
  monedaDestino: Currency;
  monto: number;
  montoCambiado: number;
  tipoCambio: number;
  userId: string;
}
