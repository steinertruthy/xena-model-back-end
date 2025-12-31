import { Injectable } from '@nestjs/common';
import { Prisma } from 'prisma/generated/client';
import {
  PrismaPromise,
  RoleFindFirstArgs,
} from 'prisma/generated/internal/prismaNamespace';
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

  findUnique<T extends Prisma.RoleFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.RoleFindUniqueArgs>,
  ) {
    args.where = this.defaultWhere(args.where);
    return this.prisma.role.findUnique(args);
  }

  findFirst<T extends Prisma.RoleFindFirstArgs>(
    args?: Prisma.SelectSubset<T, Prisma.RoleFindFirstArgs>,
  ) {
    const { where, ...restArgs } = args ?? ({} as Prisma.RoleFindFirstArgs);
    return this.prisma.role.findFirst({
      where: this.defaultWhere(where),
      ...(restArgs as RoleFindFirstArgs),
    });
  }

  findMany<T extends Prisma.RoleFindManyArgs>(
    args?: Prisma.SelectSubset<T, Prisma.RoleFindManyArgs>,
  ) {
    const { where, ...restArgs } = args ?? ({} as Prisma.RoleFindManyArgs);
    return this.prisma.role.findMany({
      where: this.defaultWhere(where),
      orderBy: {
        name: 'asc',
      },
      ...restArgs,
    }) as PrismaPromise<Prisma.RoleGetPayload<T>[]>;
  }

  defaultWhere<T>(where: T) {
    return {
      deleted: false,
      ...where,
    };
  }
}
