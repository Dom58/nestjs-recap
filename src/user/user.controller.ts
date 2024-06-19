import { Body, Controller, Delete, Get, Param, Post, Res } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from 'src/database/models/user.entity';
import { CreateUser, UserResponse } from 'src/types/Dtos/User.dto';

@Controller('users')
export class UserController {
    constructor(private userService: UserService) { }

    @Get()
    async findAll(): Promise<UserResponse[]> {
        return this.userService.findAll();
    }

    @Post('create')
    async createUser(@Body() user: CreateUser): Promise<UserResponse> {
        return this.userService.createUser(user);
    }

    @Get(':id')
    async findUser(
        @Param('id') id: string): Promise<UserResponse> {
        return this.userService.findUser(id);
    }

    @Delete(':id')
    async deleteUser(@Param('id') id: string, @Res() res: Response): Promise<{ message: string }> {
        await this.userService.deleteUser(id);
        return { message: 'User deleted successfully!' };
    }
}
