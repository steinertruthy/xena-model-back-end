import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import argon2 from 'argon2';
import { AccountTypesRepository } from 'src/models/account-types/account-types.repository';
import { RolesRepository } from 'src/models/roles/roles.repository';
import { CreateUserDto } from '../dto/create-user.dto';
import { UsersRepository } from '../users.repository';

@Injectable()
export class CreateUserUseCase {
  constructor(
    private readonly usersRepository: UsersRepository,
    private readonly accountTypesRepository: AccountTypesRepository,
    private readonly rolesRepository: RolesRepository,
  ) {}

  async execute(payload: CreateUserDto) {
    const { password, ...restPayload } = payload;

    const accountTypeExists = await this.accountTypesRepository.findUnique({
      where: {
        id: restPayload.account_type_id,
      },
      select: {
        id: true,
        default_role_id: true,
      },
    });

    if (!accountTypeExists) {
      throw new NotFoundException('account type not found');
    }

    const roleExists = await this.rolesRepository.findUnique({
      where: {
        id: accountTypeExists.default_role_id,
      },
    });

    if (!roleExists) {
      throw new NotFoundException('role default not found');
    }

    const hashPassword = await argon2.hash(password);

    const emailExists = await this.usersRepository.findUnique({
      where: {
        email: restPayload.email,
      },
      select: {
        email: true,
      },
    });

    if (emailExists) {
      throw new ConflictException('email already exists');
    }

    return this.usersRepository.create(
      restPayload,
      hashPassword,
      accountTypeExists.default_role_id,
    );
  }
}
