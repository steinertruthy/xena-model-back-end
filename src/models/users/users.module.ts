import { Module } from '@nestjs/common';
import { AccountTypesRepository } from '../account-types/account-types.repository';
import { CreateUserUseCase } from './use-cases/create-user.usecase';
import { UsersController } from './users.controller';
import { UsersRepository } from './users.repository';
import { UsersService } from './users.service';
import { RolesRepository } from '../roles/roles.repository';

@Module({
  controllers: [UsersController],
  exports: [UsersRepository],
  providers: [
    UsersService,
    UsersRepository,
    AccountTypesRepository,
    RolesRepository,
    CreateUserUseCase,
  ],
})
export class UsersModule {}
