import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe, Logger } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { NestExpressApplication } from '@nestjs/platform-express';
import {  envs } from "./config/envs";
import * as dotenv from 'dotenv';

dotenv.config();

async function bootstrap() {

  const logger  = new Logger('main')
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // Configuración CORS
  app.enableCors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    allowedHeaders: 'Origin,X-Requested-With,Content-Type,Accept,Authorization',
  });
  
  // Prefijo global para todas las rutas
  app.setGlobalPrefix('/api/v1');

  // Pipes globales para validación
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  // Configuración de Swagger
  const config = new DocumentBuilder()
    .setTitle('Kambista')
    .setDescription('Kambista apis')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/v1/docs', app, document);


  await app.listen(envs.port);
  logger.log("aplication running on port ", envs.port, envs)
}

bootstrap();
