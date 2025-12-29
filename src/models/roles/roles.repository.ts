import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { CreateRoleDto } from './dto/create-role.dto';

@Injectable()
export class RolesRepository {
  constructor(private readonly prisma: PrismaService) {}

  create(payload: CreateRoleDto) {
    return this.prisma.role.create({
      data: payload,
    });
  }

  findById(id: string, deleted = false) {
    return this.prisma.role.findUnique({
      where: {
        id,
        deleted,
      },
    });
  }

  findByTag(tag: string) {
    return this.prisma.role.findUnique({
      where: {
        tag,
      },
    });
  }

  findAll(deleted = false) {
    return this.prisma.role.findMany({
      where: {
        deleted,
      },
      orderBy: {
        name: 'asc',
      },
    });
  }
}
