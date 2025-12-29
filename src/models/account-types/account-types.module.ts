import { Module } from '@nestjs/common';
import { RolesModule } from '../roles/roles.module';
import { AccountTypesController } from './account-types.controller';
import { AccountTypesRepository } from './account-types.repository';
import { AccountTypesService } from './account-types.service';
import { CreateAccountTypeUseCase } from './use-cases/create-account-type.usecase';

@Module({
  controllers: [AccountTypesController],
  imports: [RolesModule],
  providers: [
    AccountTypesService,
    AccountTypesRepository,
    CreateAccountTypeUseCase,
  ],
})
export class AccountTypesModule {}
