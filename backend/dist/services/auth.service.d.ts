import { Repository } from 'typeorm';
import { User } from '../models/user.entity';
export declare class AuthService {
    private readonly userRepository;
    constructor(userRepository: Repository<User>);
    validateUser(idToken: string): Promise<any>;
    login(user: any): Promise<any>;
}
