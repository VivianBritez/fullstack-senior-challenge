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
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("../core/domain/auth.service");
const register_dto_1 = require("../core/dto/register.dto");
const swagger_1 = require("@nestjs/swagger");
const login_auth_dto_1 = require("../core/dto/login-auth.dto");
const api_response_service_1 = require("../../shared/httpCode/api-response.service");
let AuthController = class AuthController {
    constructor(authService, httpService) {
        this.authService = authService;
        this.httpService = httpService;
    }
    async registerUser(authObject) {
        const newUser = await this.authService.register(authObject);
        if (newUser.code) {
            return this.httpService.conflictResponse('The email already exists');
        }
        return this.httpService.successResponse(newUser, 'Successfully registered customer');
    }
    async loginUser(authObject) {
        const data = await this.authService.login(authObject);
        if (!data) {
            return this.httpService.forbiddenResponse('Invalid credentials');
        }
        return this.httpService.successResponse(data, 'User');
    }
};
__decorate([
    (0, common_1.Post)('register'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [register_dto_1.RegisterDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "registerUser", null);
__decorate([
    (0, common_1.Post)('login'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_auth_dto_1.LoginDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "loginUser", null);
AuthController = __decorate([
    (0, common_1.Controller)('auth'),
    (0, swagger_1.ApiTags)('auth'),
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [auth_service_1.AuthService,
        api_response_service_1.HttpResponseService])
], AuthController);
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map