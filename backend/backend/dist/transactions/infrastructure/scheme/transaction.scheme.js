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
exports.TransactionSchema = exports.Transaction = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let Transaction = class Transaction {
};
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        enum: ['USD', 'PEN'],
        validate: {
            validator: function (value) {
                return ['USD', 'PEN'].includes(value);
            },
            message: 'Invalid currency. Only USD and PEN are allowed.',
        },
    }),
    __metadata("design:type", String)
], Transaction.prototype, "monedaOrigen", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        enum: ['USD', 'PEN'],
        validate: {
            validator: function (value) {
                return ['USD', 'PEN'].includes(value);
            },
            message: 'Invalid currency. Only USD and PEN are allowed.',
        },
    }),
    __metadata("design:type", String)
], Transaction.prototype, "monedaDestino", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], Transaction.prototype, "monto", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], Transaction.prototype, "montoCambiado", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], Transaction.prototype, "tipoCambio", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Transaction.prototype, "userId", void 0);
Transaction = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], Transaction);
exports.Transaction = Transaction;
exports.TransactionSchema = mongoose_1.SchemaFactory.createForClass(Transaction);
exports.TransactionSchema.index({ userId: 1 });
//# sourceMappingURL=transaction.scheme.js.map