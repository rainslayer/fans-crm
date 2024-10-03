import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('api/v1/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() body: { userId: string }): Promise<{ accessToken: string }> {
    const accessToken = await this.authService.generateToken(body.userId);

    return { accessToken };
  }
}
