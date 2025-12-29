import { Injectable } from '@nestjs/common';
import { CreateRoleDto } from '../dto/create-role.dto';
import { RolesRepository } from '../roles.repository';

@Injectable()
export class CreateRoleUseCase {
  constructor(private readonly rolesRepository: RolesRepository) {}
  execute(payload: CreateRoleDto) {
    return this.rolesRepository.create(payload);
  }
}
