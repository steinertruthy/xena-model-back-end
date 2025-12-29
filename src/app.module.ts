import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './common/prisma/prisma.module';
import { AccountTypesModule } from './models/account-types/account-types.module';
import { GendersModule } from './models/genders/genders.module';
import { RolesModule } from './models/roles/roles.module';
import { UsersModule } from './models/users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { AuthSessionsModule } from './models/auth-sessions/auth-sessions.module';
import { envConfigSchema, TEnvConfigSchema } from 'src/config/env.config';
import { XApiKeyMiddleware } from './common/middlewares/x-api-key/x-api-key.middleware';

@Module({
  imports: [
    ConfigModule.forRoot<TEnvConfigSchema>({
      isGlobal: true,
      envFilePath: './src/config/.env',
      validate(env) {
        return envConfigSchema.parse(env);
      },
    }),
    JwtModule.register({
      global: true,
    }),
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
    consumer.apply(XApiKeyMiddleware).forRoutes('*');
  }
}
