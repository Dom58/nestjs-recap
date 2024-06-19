import { Injectable } from '@nestjs/common';
import { User } from './types';
import { users } from './database';

@Injectable()
export class AppService {
  getHello(): User[] {
    return users;
  }
}
