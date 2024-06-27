import { Injectable, NotFoundException } from '@nestjs/common';
import { UserRepository } from '../../../infrastructure/repository/user.repository';
import { CreateUserDto } from '../../dto/create-user.dto';
import { Users } from '../../../infrastructure/entity/user.entity';

@Injectable()
export class UsersService {
  constructor(private readonly userRepository: UserRepository) {}

  async createUser(createUserDto: CreateUserDto): Promise<Users> {
    return this.userRepository.create(createUserDto);
  }

  async findAllUsers(): Promise<Users[]> {
    return this.userRepository.findAll();
  }

  async findUserById(id: string): Promise<Users> {
    const user = await this.userRepository.findById(id);
  
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return user;
  }

  async updateUser(id: string, updateUserDto: Partial<Users>): Promise<Users> {
    const existingUser = await this.findUserById(id);
    const updatedUser = Object.assign(existingUser, updateUserDto);
    return this.userRepository.update(id, updatedUser);
  }

  async deleteUser(id: string): Promise<void> {
    const user = await this.findUserById(id);
    await this.userRepository.delete(id);
  }


  async findUserByEmail(email: string): Promise<Users> {
    const user = await this.userRepository.findByEmail(email);
    if (!user) {
      throw new NotFoundException(`User with email ${email} not found`);
    }
    return user;
  }

}
