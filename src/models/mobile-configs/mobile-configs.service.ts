import { Injectable } from '@nestjs/common';
import { CreateMobileConfigDto } from './dto/create-mobile-config.dto';
import { UpdateMobileConfigDto } from './dto/update-mobile-config.dto';
import { getConfig } from 'src/common/helpers/get-config.helper';

@Injectable()
export class MobileConfigsService {
  getConfig() {
    return {
      x_api_key: getConfig('X_API_KEY'),
    };
  }

  create(createMobileConfigDto: CreateMobileConfigDto) {
    return 'This action adds a new mobileConfig';
  }

  findAll() {
    return `This action returns all mobileConfigs`;
  }

  findOne(id: number) {
    return `This action returns a #${id} mobileConfig`;
  }

  update(id: number, updateMobileConfigDto: UpdateMobileConfigDto) {
    return `This action updates a #${id} mobileConfig`;
  }

  remove(id: number) {
    return `This action removes a #${id} mobileConfig`;
  }
}
