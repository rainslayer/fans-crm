import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async generateToken(userId: string) {
    return this.jwtService.signAsync({ id: userId });
  }

  async validateToken(token: string) {
    return this.jwtService.verifyAsync(token);
  }
}
