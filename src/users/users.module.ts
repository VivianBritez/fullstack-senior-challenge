import { Module } from '@nestjs/common';
import { UsersService } from './core/domain/service/users.service';
import { UsersController } from './presentation/users.controller';
import { UserRepository } from './infrastructure/repository/user.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './infrastructure/schemas/user.schema';



@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Users', schema: UserSchema }]), 
  ],
  controllers: [UsersController],
  providers: [UsersService, UserRepository],
  exports: [UsersService]
})
export class UsersModule {}
