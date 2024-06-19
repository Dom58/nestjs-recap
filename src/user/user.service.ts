import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from 'src/database/models/user.entity';
import { excludesUserColumns } from 'src/types/Dtos';
import { CreateUser, UserResponse } from 'src/types/Dtos/User.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User)
    private userRepository: typeof User,
  ) { }

  async findAll(): Promise<UserResponse[]> {
    return this.userRepository.findAll({
      attributes: {
        exclude: excludesUserColumns
      },
      order: [['createdAt', 'DESC']],
    });
  }

  async createUser(user: CreateUser): Promise<UserResponse> {
    return this.userRepository.create(user);
  }

  async findUser(id: string): Promise<User> {
    const findUser = this.userRepository.findByPk(
      id,
      {
        attributes: {
          exclude: excludesUserColumns
        }
      });
    if (!findUser) {
      throw new NotFoundException(`User with ID '${id}' not found`);
    }
    return findUser;
  }

  async deleteUser(id: string): Promise<void> {
    const user = await this.findUser(id);
    await user.destroy();
  }
}
