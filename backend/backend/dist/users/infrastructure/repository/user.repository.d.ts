import { Model } from 'mongoose';
import { Users } from '../entity/user.entity';
import { CreateUserDto } from '../../core/dto/create-user.dto';
export declare class UserRepository {
    private readonly userModel;
    constructor(userModel: Model<Users>);
    create(createUserDto: CreateUserDto): Promise<Users>;
    findById(id: string): Promise<Users | null>;
    findByEmail(email: string): Promise<Users | null>;
    findAll(): Promise<Users[]>;
    update(id: string, updateUserDto: Partial<Users>): Promise<Users | null>;
    delete(id: string): Promise<Users | null>;
}
