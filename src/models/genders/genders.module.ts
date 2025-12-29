import { Module } from '@nestjs/common';
import { GendersController } from './genders.controller';
import { GendersRepository } from './genders.repository';
import { GendersService } from './genders.service';
import { CreateGenderUseCase } from './use-cases/create-gender.usecase';

@Module({
  controllers: [GendersController],
  providers: [GendersService, CreateGenderUseCase, GendersRepository],
})
export class GendersModule {}
