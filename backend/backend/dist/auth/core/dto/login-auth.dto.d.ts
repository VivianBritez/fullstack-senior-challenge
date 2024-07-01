import { RegisterDto } from "./register.dto";
declare const LoginDto_base: import("@nestjs/common").Type<Partial<RegisterDto>>;
export declare class LoginDto extends LoginDto_base {
    email: string;
    password: string;
}
export {};
