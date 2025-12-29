import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { RolesService } from './roles.service';
import { CreateRoleUseCase } from './use-cases/create-role.usecases';

@Controller('roles')
export class RolesController {
  constructor(
    private readonly rolesService: RolesService,
    private readonly createRoleUseCase: CreateRoleUseCase,
  ) {}

  @Post()
  create(@Body() createRoleDto: CreateRoleDto) {
    return this.createRoleUseCase.execute(createRoleDto);
  }

  @Get()
  findAll() {
    return this.rolesService.findAll();
  }
}
