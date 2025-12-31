import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { RolesRepository } from 'src/models/roles/roles.repository';
import { AccountTypesRepository } from '../account-types.repository';
import { CreateAccountTypeDto } from '../dto/create-account-type.dto';

@Injectable()
export class CreateAccountTypeUseCase {
  constructor(
    private readonly accountTypesRepository: AccountTypesRepository,
    private readonly rolesRepository: RolesRepository,
  ) {}

  async execute(payload: CreateAccountTypeDto) {
    const exists = await this.accountTypesRepository.findUnique({
      where: { tag: payload.tag },
      select: {
        id: true,
      },
    });

    const roleExists = await this.rolesRepository.findUnique({
      where: {
        id: payload.default_role_id,
      },
      select: {
        id: true,
      },
    });

    if (!roleExists) {
      throw new NotFoundException('role default not found');
    }

    if (exists) {
      throw new ConflictException('tag already exists');
    }

    return await this.accountTypesRepository.create(payload);
  }
}
