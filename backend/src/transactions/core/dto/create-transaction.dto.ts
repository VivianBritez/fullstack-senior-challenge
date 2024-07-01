import { IsEnum, IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

enum Currency {
  USD = 'USD',
  PEN = 'PEN',
}

export class CreateTransactionDto {
  @ApiProperty({ description: 'Currency of origin', example: 'USD' })
  @IsEnum(Currency, { message: 'monedaOrigen must be either USD or PEN' })
  monedaOrigen: Currency;

  @ApiProperty({ description: 'Destination currency', example: 'PEN' })
  @IsEnum(Currency, { message: 'monedaDestino must be either USD or PEN' })
  monedaDestino: Currency;

  @ApiProperty({ description: 'Amount to be changed', example: 100 })
  @IsNumber()
  monto: number;
}
