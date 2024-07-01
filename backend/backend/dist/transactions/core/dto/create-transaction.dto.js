"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTransactionDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
var Currency;
(function (Currency) {
    Currency["USD"] = "USD";
    Currency["PEN"] = "PEN";
})(Currency || (Currency = {}));
class CreateTransactionDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Currency of origin', example: 'USD' }),
    (0, class_validator_1.IsEnum)(Currency, { message: 'monedaOrigen must be either USD or PEN' }),
    __metadata("design:type", String)
], CreateTransactionDto.prototype, "monedaOrigen", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Destination currency', example: 'PEN' }),
    (0, class_validator_1.IsEnum)(Currency, { message: 'monedaDestino must be either USD or PEN' }),
    __metadata("design:type", String)
], CreateTransactionDto.prototype, "monedaDestino", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Amount to be changed', example: 100 }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateTransactionDto.prototype, "monto", void 0);
exports.CreateTransactionDto = CreateTransactionDto;
//# sourceMappingURL=create-transaction.dto.js.map