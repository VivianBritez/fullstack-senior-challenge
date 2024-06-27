import { HttpCode, Injectable } from '@nestjs/common';
import { RegisterDto } from '../dto/register.dto';
import { LoginDto } from '../dto/login-auth.dto';
import { UsersService } from 'src/users/core/domain/service/users.service';
import { hash, compare } from "bcrypt";
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

    constructor(private readonly userService: UsersService,

        private jwtAuthService: JwtService
    ) { }

    async register(userObject: RegisterDto) {
        try {
            const { password } = userObject;
            const hashedPassword = await hash(password, 10);
            const userToCreate = { ...userObject, password: hashedPassword };
            const createdUser = await this.userService.createUser(userToCreate);
            const payload = { id: createdUser.id, name: createdUser.name, email: createdUser.email };
            const token = this.jwtAuthService.sign(payload);
            return { user: createdUser, token: token };
        } catch (error) {
            return error.errorResponse
        }
    }

    async login(userObjectLogin: LoginDto) {
        const { email, password } = userObjectLogin
        const findUser = await this.userService.findUserByEmail(email);
        if (!findUser) return findUser
        const checkPassword = await compare(password, findUser.password);  
        if (!checkPassword) return checkPassword
        const payload = {id: findUser.id, name: findUser.name, email: findUser.email}
        const token =  this.jwtAuthService.sign(payload)
        const data = {
            user: findUser,
            token: token
        }
        return data
    }
}
