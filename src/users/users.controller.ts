import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from '../../models/users.model';

@Controller('api/v1')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('add-user')
  async addUser(@Body() body: { name: string; email: string; phone: string }): Promise<User> {
    console.log(body);
    return this.usersService.createUser(body.name, body.email, body.phone);
  }

  @Get('get-user/:id')
  async getUser(@Param('id') id: string): Promise<User> {
    return this.usersService.findUserById(id);
  }
}
