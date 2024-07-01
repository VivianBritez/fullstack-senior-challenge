import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Users } from '../entity/user.entity'; 
import { CreateUserDto } from '../../core/dto/create-user.dto';

@Injectable()
export class UserRepository {
  constructor(@InjectModel('Users') private readonly userModel: Model<Users>) {}

  async create(createUserDto: CreateUserDto): Promise<Users> {
    const createdUser = new this.userModel(createUserDto);
    return await createdUser.save();
  }

  async findById(id: string): Promise<Users | null> {
    return await this.userModel.findById(id).exec();
  }

  async findByEmail(email: string): Promise<Users | null> {
    return await this.userModel.findOne({ email }).exec();
  }



  async findAll(): Promise<Users[]> {
    return await this.userModel.find().exec();
  }

  async update(id: string, updateUserDto: Partial<Users>): Promise<Users | null> {
    return await this.userModel.findByIdAndUpdate(id, updateUserDto, { new: true }).exec();
  }

  async delete(id: string): Promise<Users | null> {
    return await this.userModel.findByIdAndDelete(id).exec();
  }
}
