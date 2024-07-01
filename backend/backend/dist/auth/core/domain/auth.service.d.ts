import { RegisterDto } from '../dto/register.dto';
import { LoginDto } from '../dto/login-auth.dto';
import { UsersService } from 'src/users/core/domain/service/users.service';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private readonly userService;
    private jwtAuthService;
    constructor(userService: UsersService, jwtAuthService: JwtService);
    register(userObject: RegisterDto): Promise<any>;
    login(userObjectLogin: LoginDto): Promise<boolean | import("../../../users/infrastructure/entity/user.entity").Users | {
        user: import("../../../users/infrastructure/entity/user.entity").Users;
        token: string;
    }>;
}
