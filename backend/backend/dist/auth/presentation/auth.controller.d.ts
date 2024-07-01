import { AuthService } from '../core/domain/auth.service';
import { RegisterDto } from '../core/dto/register.dto';
import { LoginDto } from '../core/dto/login-auth.dto';
import { HttpResponseService } from 'src/shared/httpCode/api-response.service';
export declare class AuthController {
    private readonly authService;
    private readonly httpService;
    constructor(authService: AuthService, httpService: HttpResponseService);
    registerUser(authObject: RegisterDto): Promise<void | {
        statusCode: import("@nestjs/common").HttpStatus;
        message: string;
        data: any;
    }>;
    loginUser(authObject: LoginDto): Promise<void | {
        statusCode: import("@nestjs/common").HttpStatus;
        message: string;
        data: any;
    }>;
}
