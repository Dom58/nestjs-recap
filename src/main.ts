import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { setupSwagger } from './swagger/swagger.config';
import * as dotenv from 'dotenv';

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  setupSwagger(app);
  
  console.log(`Server is running at http:127.0.0.1:${process.env.APP_PORT}`);
  await app.listen(process.env.APP_PORT);
}
bootstrap();
