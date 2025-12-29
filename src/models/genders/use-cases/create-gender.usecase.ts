import { ConflictException, Injectable } from '@nestjs/common';
import { CreateGenderDto } from '../dto/create-gender.dto';
import { GendersRepository } from '../genders.repository';

@Injectable()
export class CreateGenderUseCase {
  constructor(private readonly gendersRepository: GendersRepository) {}

  async execute(payload: CreateGenderDto) {
    const exists = await this.gendersRepository.findByTag(payload.tag);

    if (exists) {
      throw new ConflictException('tag already exists');
    }
    return await this.gendersRepository.create(payload);
  }
}
