import { Module } from '@nestjs/common';
import { RolesService } from './roles.service';
import { RolesController } from './roles.controller';
import { RolesRepository } from './roles.repository';
import { CreateRoleUseCase } from './use-cases/create-role.usecases';

@Module({
  controllers: [RolesController],
  exports: [RolesRepository],
  providers: [RolesService, RolesRepository, CreateRoleUseCase],
})
export class RolesModule {}
