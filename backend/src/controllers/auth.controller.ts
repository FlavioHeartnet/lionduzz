import { Controller, Post, Body, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from '../services/auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('provider')
  async loginWithProvider(@Body('idToken') idToken: string) {
    const user = await this.authService.validateUser(idToken);
    return this.authService.login(user);
  }

  @UseGuards(AuthGuard('jwt'))
  @Post('sync')
  async sync(@Request() req) {
    return await req.user;
  }
}
