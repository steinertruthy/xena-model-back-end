import { PrismaService } from 'src/common/prisma/prisma.service';
import { CreateAccountTypeDto } from './dto/create-account-type.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AccountTypesRepository {
  constructor(private readonly prisma: PrismaService) {}

  create(payload: CreateAccountTypeDto) {
    return this.prisma.accountType.create({ data: payload });
  }

  findById(id: string, deleted = false) {
    return this.prisma.accountType.findUnique({
      where: { id, deleted: deleted },
    });
  }

  findByTag(tag: string) {
    return this.prisma.accountType.findUnique({ where: { tag } });
  }

  findAll(deleted = false) {
    return this.prisma.accountType.findMany({
      where: {
        deleted: deleted,
      },
      orderBy: {
        name: 'asc',
      },
    });
  }
}
