import { PrismaService } from 'src/common/prisma/prisma.service';
import { CreateGenderDto } from './dto/create-gender.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class GendersRepository {
  constructor(private readonly prisma: PrismaService) {}

  create(payload: CreateGenderDto) {
    return this.prisma.gender.create({ data: payload });
  }

  findById(id: string, deleted = false) {
    return this.prisma.gender.findUnique({
      where: {
        id,
        deleted: deleted,
      },
    });
  }

  findByTag(tag: string) {
    return this.prisma.gender.findUnique({
      where: {
        tag,
      },
    });
  }

  findAll(deleted = false) {
    return this.prisma.gender.findMany({
      where: {
        deleted: deleted,
      },
      orderBy: {
        name: 'asc',
      },
    });
  }
}
