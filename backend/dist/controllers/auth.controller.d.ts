import { AuthService } from '../services/auth.service';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    loginWithProvider(idToken: string): Promise<any>;
    sync(req: any): Promise<any>;
}
