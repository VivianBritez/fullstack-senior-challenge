import { IsString, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTransactionDto {
  @ApiProperty({ description: 'Currency of origin', example: 'USD' })
  @IsString()
  monedaOrigen: string;

  @ApiProperty({ description: 'Destination currency', example: 'PEN' })
  @IsString()
  monedaDestino: string;

  @ApiProperty({ description: 'Amount to exchange', example: 100 })
  @IsNumber()
  monto: number;
}
