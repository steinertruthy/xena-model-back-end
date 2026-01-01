import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MobileConfigsService } from './mobile-configs.service';
import { CreateMobileConfigDto } from './dto/create-mobile-config.dto';
import { UpdateMobileConfigDto } from './dto/update-mobile-config.dto';

@Controller('mobile-configs')
export class MobileConfigsController {
  constructor(private readonly mobileConfigsService: MobileConfigsService) {}

  @Post()
  create(@Body() createMobileConfigDto: CreateMobileConfigDto) {
    return this.mobileConfigsService.create(createMobileConfigDto);
  }

  @Get()
  getConfig() {
    console.log('aaaaaaaaaaaaa');

    return this.mobileConfigsService.getConfig();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mobileConfigsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateMobileConfigDto: UpdateMobileConfigDto,
  ) {
    return this.mobileConfigsService.update(+id, updateMobileConfigDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mobileConfigsService.remove(+id);
  }
}
