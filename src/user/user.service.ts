import { Injectable, NotFoundException } from '@nestjs/common';
import { users } from 'src/database';
import { User } from 'src/types';

@Injectable()
export class UserService {
    findAll(): User[] {
        return users;
    };

    createUser(): User[] {
        const userId = users.length;
        const newUser: User = {
            id: String(userId + 1),
            name: `New${userId + 1}`
        };

        users.push(newUser);
        return users;
    }

    findUser(id: string): User {
        const findUser = users.find((user) => user.id === id);
        if (!findUser) throw new NotFoundException(`User with ID '${id}' not found`);
        return findUser;
    }
}
