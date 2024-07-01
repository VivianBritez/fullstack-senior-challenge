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
exports.HttpService = void 0;
const common_1 = require("@nestjs/common");
const http_axios_adapter_1 = require("../../adpaters/http-axios.adapter");
let HttpService = class HttpService {
    constructor(httpService) {
        this.httpService = httpService;
    }
    getInfo(url, options) {
        return this.httpService.get(url, options);
    }
    post(url, data, options) {
        return this.httpService.post(url, data, options);
    }
    put(url, data, options) {
        return this.httpService.put(url, data, options);
    }
    delete(url, options) {
        return this.httpService.delete(url, options);
    }
};
HttpService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [http_axios_adapter_1.AxiosHttpService])
], HttpService);
exports.HttpService = HttpService;
//# sourceMappingURL=http-request.service.js.map