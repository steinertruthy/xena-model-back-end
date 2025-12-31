import { Injectable } from '@nestjs/common';
import { Prisma } from 'prisma/generated/client';
import { PrismaPromise } from 'prisma/generated/internal/prismaNamespace';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { CreateAccountTypeDto } from './dto/create-account-type.dto';

@Injectable()
export class AccountTypesRepository {
  constructor(private readonly prisma: PrismaService) {}

  create(payload: CreateAccountTypeDto) {
    return this.prisma.accountType.create({ data: payload });
  }

  findUnique<T extends Prisma.AccountTypeFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.AccountTypeFindUniqueArgs>,
  ) {
    args.where = this.defaultWhere(args.where);
    return this.prisma.accountType.findUnique(args);
  }

  findMany<T extends Prisma.AccountTypeFindManyArgs>(
    args?: Prisma.SelectSubset<T, Prisma.AccountTypeFindManyArgs>,
  ) {
    const { where, ...restArgs } =
      args ?? ({} as Prisma.AccountTypeFindManyArgs);

    const defaultWhere = this.defaultWhere(where);

    return this.prisma.accountType.findMany({
      where: defaultWhere,
      orderBy: {
        name: 'asc',
      },
      ...restArgs,
    }) as PrismaPromise<Prisma.AccountTypeGetPayload<T>[]>;
  }

  private defaultWhere<T>(where: T) {
    return {
      deleted: false,
      ...where,
    };
  }
}
