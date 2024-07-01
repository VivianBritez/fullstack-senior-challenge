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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("../../../users/core/domain/service/users.service");
const bcryptjs_1 = require("bcryptjs");
const jwt_1 = require("@nestjs/jwt");
let AuthService = class AuthService {
    constructor(userService, jwtAuthService) {
        this.userService = userService;
        this.jwtAuthService = jwtAuthService;
    }
    async register(userObject) {
        try {
            const { password } = userObject;
            const hashedPassword = await (0, bcryptjs_1.hash)(password, 10);
            const userToCreate = Object.assign(Object.assign({}, userObject), { password: hashedPassword });
            const createdUser = await this.userService.createUser(userToCreate);
            const payload = { id: createdUser.id, name: createdUser.name, email: createdUser.email };
            const token = this.jwtAuthService.sign(payload);
            return { user: createdUser, token: token };
        }
        catch (error) {
            return error.errorResponse;
        }
    }
    async login(userObjectLogin) {
        const { email, password } = userObjectLogin;
        const findUser = await this.userService.findUserByEmail(email);
        if (!findUser)
            return findUser;
        const checkPassword = await (0, bcryptjs_1.compare)(password, findUser.password);
        if (!checkPassword)
            return checkPassword;
        const payload = { id: findUser.id, name: findUser.name, email: findUser.email };
        const token = this.jwtAuthService.sign(payload);
        const data = {
            user: findUser,
            token: token
        };
        return data;
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map