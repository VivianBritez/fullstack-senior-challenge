import { UserRepository } from '../../../infrastructure/repository/user.repository';
import { CreateUserDto } from '../../dto/create-user.dto';
import { Users } from '../../../infrastructure/entity/user.entity';
export declare class UsersService {
    private readonly userRepository;
    constructor(userRepository: UserRepository);
    createUser(createUserDto: CreateUserDto): Promise<Users>;
    findAllUsers(): Promise<Users[]>;
    findUserById(id: string): Promise<Users>;
    updateUser(id: string, updateUserDto: Partial<Users>): Promise<Users>;
    deleteUser(id: string): Promise<void>;
    findUserByEmail(email: string): Promise<Users>;
}
