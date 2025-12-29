import { Injectable } from '@nestjs/common';
import { Prisma } from 'prisma/generated/client';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersRepository {
  constructor(private readonly prisma: PrismaService) {}

  create(
    payload: Omit<CreateUserDto, 'password'>,
    hashPassword: string,
    roleId: string,
  ) {
    return this.prisma.user.create({
      data: {
        ...payload,
        role_id: roleId,
        passwords: {
          create: {
            hash: hashPassword,
          },
        },
      },
    });
  }

  findOne<T extends Prisma.UserFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserFindFirstArgs>,
  ): Promise<Prisma.UserGetPayload<T> | null> {
    const { where } = args;

    args.where = this.defaultWhere(where);
    return this.prisma.user.findUnique(args);
  }

  private defaultWhere(where: Prisma.UserWhereUniqueInput) {
    return {
      deleted: false,
      ...where,
    };
  }
}
