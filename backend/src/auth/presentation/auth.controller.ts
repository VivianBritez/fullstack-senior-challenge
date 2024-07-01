import { Controller, Post, Body, ConflictException, Injectable } from '@nestjs/common';
import { AuthService } from '../core/domain/auth.service';
import { RegisterDto } from '../core/dto/register.dto';
import { ApiTags } from '@nestjs/swagger';
import { LoginDto } from '../core/dto/login-auth.dto';
import { HttpResponseService } from 'src/shared/httpCode/api-response.service';


@Controller('auth')
@ApiTags('auth')
@Injectable()
export class AuthController {
  constructor(private readonly authService: AuthService,
    private readonly httpService: HttpResponseService

  ) { }


  @Post('register')
  async registerUser(@Body() authObject: RegisterDto) {
    const newUser = await this.authService.register(authObject);
    if (newUser.code) {
      return this.httpService.conflictResponse('The email already exists')
    }
    return this.httpService.successResponse(newUser, 'Successfully registered customer')
  }



  @Post('login')
  async loginUser(@Body() authObject: LoginDto) {

    const data = await this.authService.login(authObject);
    if (!data) {
      return this.httpService.forbiddenResponse('Invalid credentials')
    }
    return this.httpService.successResponse(data, 'User')
  }
}
