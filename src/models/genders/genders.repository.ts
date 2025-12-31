import { Injectable } from '@nestjs/common';
import { PrismaPromise } from '@prisma/client/runtime/client';
import { Prisma } from 'prisma/generated/client';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { CreateGenderDto } from './dto/create-gender.dto';

@Injectable()
export class GendersRepository {
  constructor(private readonly prisma: PrismaService) {}

  create(payload: CreateGenderDto) {
    return this.prisma.gender.create({ data: payload });
  }

  findUnique<T extends Prisma.GenderFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.GenderFindUniqueArgs>,
  ) {
    args.where = this.defaultWhere(args.where);
    return this.prisma.gender.findUnique(args);
  }

  findMany<T extends Prisma.GenderFindManyArgs>(
    args?: Prisma.SelectSubset<T, Prisma.GenderFindManyArgs>,
  ) {
    const { where, ...restArgs } = args ?? ({} as Prisma.GenderFindManyArgs);
    return this.prisma.gender.findMany({
      where: this.defaultWhere(where),
      orderBy: {
        name: 'asc',
      },
      ...restArgs,
    }) as PrismaPromise<Prisma.GenderGetPayload<T>>;
  }

  private defaultWhere<T>(args: T) {
    return {
      deleted: false,
      ...args,
    };
  }
}
