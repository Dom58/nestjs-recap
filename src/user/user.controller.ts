import { Body, Controller, Delete, Get, Param, Post, Res } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from 'src/database/models/user.entity';
import { CreateUser, UserResponse } from 'src/types/Dtos/User.dto';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateUserDto, DeleteUserMessage } from 'src/swagger/users';

@ApiTags('users')
@Controller('users')
export class UserController {
    constructor(private userService: UserService) { }

    @ApiOperation({ summary: 'Get all users' })
    @ApiResponse({ status: 200, type: User })
    @Get()
    async findAll(): Promise<UserResponse[]> {
        return this.userService.findAll();
    }

    @ApiOperation({ summary: 'Create a user' })
    @ApiBody({ type: CreateUserDto })
    @ApiResponse({ status: 201, type: User })
    @Post('create')
    async createUser(@Body() user: CreateUser): Promise<UserResponse> {
        return this.userService.createUser(user);
    }

    @ApiOperation({ summary: 'Get a user' })
    @ApiResponse({ status: 200, type: User })
    @Get(':id')
    async findUser(
        @Param('id') id: string): Promise<UserResponse> {
        return this.userService.findUser(id);
    }

    @ApiOperation({ summary: 'Delete a user' })
    @ApiResponse({ status: 200, type: DeleteUserMessage })
    @Delete(':id')
    async deleteUser(@Param('id') id: string, @Res() res: Response): Promise<{ message: string }> {
        await this.userService.deleteUser(id);
        return { message: 'User deleted successfully!' };
    }
}
