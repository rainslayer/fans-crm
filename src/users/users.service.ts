import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from '../../models/users.model';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User)
    private userModel: typeof User,
  ) {}

  async createUser(name: string, email: string, phone: string): Promise<User> {
    return this.userModel.create({ name, email, phone });
  }

  async findUserById(id: string): Promise<User> {
    return this.userModel.findByPk(id);
  }
}
