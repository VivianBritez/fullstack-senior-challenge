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
exports.AxiosHttpService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("axios");
let AxiosHttpService = class AxiosHttpService {
    constructor() {
        this.axiosInstance = axios_1.default.create();
    }
    async get(url, options) {
        const response = await this.axiosInstance.get(url, options);
        return response.data;
    }
    async post(url, data, options) {
        const response = await this.axiosInstance.post(url, data, options);
        return response.data;
    }
    async put(url, data, options) {
        const response = await this.axiosInstance.put(url, data, options);
        return response.data;
    }
    async delete(url, options) {
        const response = await this.axiosInstance.delete(url, options);
        return response.data;
    }
};
AxiosHttpService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], AxiosHttpService);
exports.AxiosHttpService = AxiosHttpService;
//# sourceMappingURL=http-axios.adapter.js.map