import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './types';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): User[] {
    return this.appService.getHello();
  }
}
