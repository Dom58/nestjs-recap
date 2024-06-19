import { Controller, Get, Param, Post } from '@nestjs/common';
import { User } from 'src/types';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
    constructor(private userService: UserService) { }
    @Get()
    findAll(): User[] {
        return this.userService.findAll();
    }

    @Post('create')
    createUser(): User[] {
        return this.userService.createUser();
    }

    @Get(':id')
    findUser(@Param('id') id: string): User {
        return this.userService.findUser(id);
    }
}
