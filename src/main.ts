import fastifyCookie from '@fastify/cookie';
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';

import { AppModule } from './app.module';
import { TEnvConfigSchema } from 'src/config/env.config';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const configService = new ConfigService<TEnvConfigSchema>();

  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );

  app.setGlobalPrefix('/api');
  app.useGlobalPipes(
    new ValidationPipe({
      forbidNonWhitelisted: true,
      forbidUnknownValues: true,
      whitelist: true,
    }),
  );
  await app.register(fastifyCookie, {
    secret: configService.get<string>('COOKIE_SECRET_KEY'),
  });
  await app.listen(configService.get<string>('PORT') ?? 3000, '192.168.18.12');
}
bootstrap();
