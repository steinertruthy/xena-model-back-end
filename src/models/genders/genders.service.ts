import { Injectable } from '@nestjs/common';
import { GendersRepository } from './genders.repository';

@Injectable()
export class GendersService {
  constructor(private readonly gendersRepository: GendersRepository) {}

  async findAll() {
    return await this.gendersRepository.findMany();
  }
}
