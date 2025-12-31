import { Body, Controller, Get, Post } from '@nestjs/common';
import { AccountTypesService } from './account-types.service';
import { CreateAccountTypeDto } from './dto/create-account-type.dto';
import { CreateAccountTypeUseCase } from './use-cases/create-account-type.usecase';

@Controller('account-types')
export class AccountTypesController {
  constructor(
    private readonly accountTypesService: AccountTypesService,
    private readonly createAccountTypeUseCase: CreateAccountTypeUseCase,
  ) {}

  @Post()
  create(@Body() createAccountTypeDto: CreateAccountTypeDto) {
    return this.createAccountTypeUseCase.execute(createAccountTypeDto);
  }

  @Get()
  findAll() {
    return this.accountTypesService.findAll();
  }

  @Get('/publics')
  findAllPublics() {
    return this.accountTypesService.findAllPublics();
  }
}
