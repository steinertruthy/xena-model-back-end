import { Module } from '@nestjs/common';
import { UsersModule } from '../users/users.module';
import { AuthSessionsController } from './auth-sessions.controller';
import { AuthSessionsService } from './auth-sessions.service';
import { SignInUseCase } from './use-cases/sign-in.usecase';

@Module({
  controllers: [AuthSessionsController],
  imports: [UsersModule],
  providers: [AuthSessionsService, SignInUseCase],
})
export class AuthSessionsModule {}
