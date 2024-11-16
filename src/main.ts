import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { AppError } from './errors/AppError';

import { config as dotenvConfig } from 'dotenv';
import { erroMiddlaware } from './middlewares/errosMiddlaware';
dotenvConfig({ path: '.env' });

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Ituran interview')
    .setDescription('The Ituran interview API description')
    .setVersion('1.0')
    .addBearerAuth(
      {
        type: 'http',
        scheme: 'Bearer',
        bearerFormat: 'jwt',
        name: 'Authorization',
      },
      'access-token',
    )
    .build();

  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, documentFactory);

  app.use(erroMiddlaware);
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(3000);
}
bootstrap();
