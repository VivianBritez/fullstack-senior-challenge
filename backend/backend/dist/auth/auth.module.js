"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./core/domain/auth.service");
const auth_controller_1 = require("./presentation/auth.controller");
const users_module_1 = require("../users/users.module");
const api_response_1 = require("../shared/httpCode/api-response");
const jwt_1 = require("@nestjs/jwt");
const envs_1 = require("../config/envs");
const passport_1 = require("@nestjs/passport");
const jwt_strategy_1 = require("./core/domain/jwt.strategy");
const jwt_auth_guard_1 = require("./core/domain/jwt-auth.guard");
let AuthModule = class AuthModule {
};
AuthModule = __decorate([
    (0, common_1.Module)({
        controllers: [auth_controller_1.AuthController],
        providers: [auth_service_1.AuthService, jwt_strategy_1.JwtStrategy, jwt_auth_guard_1.JwtAuthGuard],
        imports: [users_module_1.UsersModule, api_response_1.HttpResponseModule, passport_1.PassportModule,
            jwt_1.JwtModule.register({
                secret: envs_1.envs.jwt_secret,
                signOptions: { expiresIn: '24h' }
            })
        ]
    })
], AuthModule);
exports.AuthModule = AuthModule;
//# sourceMappingURL=auth.module.js.map