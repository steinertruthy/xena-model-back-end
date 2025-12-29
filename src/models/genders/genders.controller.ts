import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { CreateGenderDto } from './dto/create-gender.dto';
import { CreateGenderUseCase } from './use-cases/create-gender.usecase';
import { GendersService } from './genders.service';
import { AuthGuard } from 'src/common/guards/auth.guard';

@Controller('genders')
export class GendersController {
  constructor(
    private readonly gendersService: GendersService,
    private readonly createGenderUseCase: CreateGenderUseCase,
  ) {}

  @Post()
  @UseGuards(AuthGuard)
  create(@Body() createGenderDto: CreateGenderDto) {
    return this.createGenderUseCase.execute(createGenderDto);
  }

  @Get()
  findAll() {
    return this.gendersService.findAll();
  }
}
