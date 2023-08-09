import { Controller, Post, Body, Req } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() body) {
    const user = await this.authService.validateUser(body.username, body.password);
    if (user) {
      return this.authService.login(user);
    }
    return null;
  }

  @Post('register')
  async register(@Body() body) {
    const user = await this.authService.register(body);
    return user;
  }
}