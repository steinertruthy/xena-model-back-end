import { Injectable } from '@nestjs/common';
import { AccountTypesRepository } from './account-types.repository';

@Injectable()
export class AccountTypesService {
  constructor(
    private readonly accountTypesRepository: AccountTypesRepository,
  ) {}

  findAll() {
    return this.accountTypesRepository.findMany();
  }

  async findAllPublics() {
    return await this.accountTypesRepository.findMany({
      where: {
        is_public: true,
      },
    });
  }
}
