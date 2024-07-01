import { Module } from '@nestjs/common';
import { AuthService } from './core/domain/auth.service';
import { AuthController } from './presentation/auth.controller';
import { UsersModule } from 'src/users/users.module';
import { HttpResponseModule } from 'src/shared/httpCode/api-response';
import { JwtModule } from '@nestjs/jwt';
import { envs } from "../config/envs";
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './core/domain/jwt.strategy';
import { JwtAuthGuard } from './core/domain/jwt-auth.guard';

@Module({
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy, JwtAuthGuard],
  imports: [UsersModule, HttpResponseModule, PassportModule,
    JwtModule.register({
      secret: envs.jwt_secret,
      signOptions: { expiresIn: '24h' }
    })

  ]
})
export class AuthModule { }
