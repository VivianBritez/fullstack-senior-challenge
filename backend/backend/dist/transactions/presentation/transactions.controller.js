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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionsController = void 0;
const common_1 = require("@nestjs/common");
const transactions_service_1 = require("../core/service/transactions.service");
const create_transaction_dto_1 = require("../core/dto/create-transaction.dto");
const api_response_service_1 = require("../../shared/httpCode/api-response.service");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../../auth/core/domain/jwt-auth.guard");
let TransactionsController = class TransactionsController {
    constructor(transactionsService, httpService) {
        this.transactionsService = transactionsService;
        this.httpService = httpService;
    }
    async create(createTransactionDto, req) {
        const userId = req.userId;
        try {
            const data = await this.transactionsService.create(createTransactionDto, userId);
            return this.httpService.successResponse(data, 'Calculated');
        }
        catch (error) {
            return this.httpService.errorResponse();
        }
    }
    async save(createTransactionDto, req) {
        const userId = req.user.payload.id;
        try {
            const data = await this.transactionsService.save(createTransactionDto, userId);
            return this.httpService.successResponse(data, 'Calculated');
        }
        catch (error) {
            return this.httpService.errorResponse();
        }
    }
    async findAll() {
        try {
            const data = await this.transactionsService.getExchangeRate();
            return this.httpService.successResponse(data, 'Current exchange rate');
        }
        catch (error) {
        }
    }
    async getExchangeById(req) {
        const transaction = await this.transactionsService.findByUserId(req.user.payload.id);
        if (!transaction) {
            return this.httpService.notFoundResponse(`Transaction with ID ${req.user.payload.id} not found`);
        }
        return this.httpService.successResponse(transaction, 'List of transaccions');
    }
};
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_transaction_dto_1.CreateTransactionDto, Object]),
    __metadata("design:returntype", Promise)
], TransactionsController.prototype, "create", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)('save'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_transaction_dto_1.CreateTransactionDto, Object]),
    __metadata("design:returntype", Promise)
], TransactionsController.prototype, "save", null);
__decorate([
    (0, common_1.Get)('current-change'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TransactionsController.prototype, "findAll", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('byUser'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TransactionsController.prototype, "getExchangeById", null);
TransactionsController = __decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiTags)('transactions'),
    (0, common_1.Controller)('transactions'),
    __metadata("design:paramtypes", [transactions_service_1.TransactionsService,
        api_response_service_1.HttpResponseService])
], TransactionsController);
exports.TransactionsController = TransactionsController;
//# sourceMappingURL=transactions.controller.js.map