import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import * as dotenv from 'dotenv';
import { UserModule } from './user/user.module';
import { User } from './database/models/user.entity';

dotenv.config();

const environment = 'DEVELOPMENT'
@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      timezone: process.env.APP_TIMEZONE as string,
      ssl: process.env[`DB_${environment}_SSL`] === 'TRUE',
      host: process.env[`DB_${environment}_HOST`] as string,
      username: process.env[`DB_${environment}_USER`] as string,
      database: process.env[`DB_${environment}_NAME`] as string,
      password: process.env[`DB_${environment}_PASSWORD`] as string,
      port: parseInt(process.env[`DB_${environment}_PORT`] as string, 10),
      models: [User],
      autoLoadModels: true,
      synchronize: true
    }),
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
