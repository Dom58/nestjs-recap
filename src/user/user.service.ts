import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from 'src/database/models/user.entity';
import { CreateUser, UserResponse } from 'src/types/Dtos/User.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User)
    private userRepository: typeof User,
  ) { }

  async findAll(): Promise<UserResponse[]> {
    return this.userRepository.findAll();
  }

  async createUser(user: CreateUser): Promise<User> {
    return this.userRepository.create(user);
  }

  async findUser(id: string): Promise<User> {
    const findUser = this.userRepository.findOne({
      where: { id }
    });
    if (!findUser) {
      console.log(`User with ID '${id}' not found`);
      throw new NotFoundException(`User with ID '${id}' not found`);
    }
    return findUser;
  }
}
