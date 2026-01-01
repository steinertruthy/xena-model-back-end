import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { XApiKeyMiddleware } from './common/middlewares/x-api-key/x-api-key.middleware';
import { PrismaModule } from './common/prisma/prisma.module';
import { envSchema, TEnvSchema } from './common/schemas/env.schema';
import { AccountTypesModule } from './models/account-types/account-types.module';
import { AuthSessionsModule } from './models/auth-sessions/auth-sessions.module';
import { GendersModule } from './models/genders/genders.module';
import { RolesModule } from './models/roles/roles.module';
import { UsersModule } from './models/users/users.module';
import { MobileConfig } from './models/mobile-configs/entities/mobile-config.entity';
import { MobileConfigsModule } from './models/mobile-configs/mobile-configs.module';

@Module({
  imports: [
    ConfigModule.forRoot<TEnvSchema>({
      isGlobal: true,
      validate(env) {
        return envSchema.parse(env);
      },
    }),
    JwtModule.register({
      global: true,
    }),
    MobileConfigsModule,
    AuthSessionsModule,
    UsersModule,
    RolesModule,
    AccountTypesModule,
    GendersModule,
    PrismaModule,
  ],
  controllers: [AppController],
  exports: [],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(XApiKeyMiddleware)
      .exclude({
        method: RequestMethod.GET,
        path: '/api/mobile-config',
      })
      .forRoutes('*');
  }
}
