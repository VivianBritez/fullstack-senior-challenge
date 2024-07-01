import { UsersService } from '../core/domain/service/users.service';
import { UpdateUserDto } from '../core/dto/update-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    findAll(): Promise<import("../infrastructure/entity/user.entity").Users[]>;
    findOne(id: string, req: any): Promise<import("../infrastructure/entity/user.entity").Users>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<import("../infrastructure/entity/user.entity").Users>;
    remove(id: string): Promise<void>;
}
