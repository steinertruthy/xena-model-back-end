import { Logger } from '@nestjs/common';
import { PrismaService } from 'src/common/prisma/prisma.service';
import argon2 from 'argon2';
import { usersMock } from './mocks/users.mock';

const prismaService = new PrismaService();

export const createUsersSeed = async () => {
  const defaultPassword = '123456789';

  try {
    for (const user of usersMock) {
      const passwordHash = await argon2.hash(defaultPassword);
      await prismaService.user.upsert({
        where: {
          email: user.email,
        },
        update: {},
        create: {
          ...user,
          passwords: {
            create: {
              hash: passwordHash,
            },
          },
        },
      });
    }
  } catch (error) {
    Logger.error('createUsersSeed', error);
    process.exit(1);
  } finally {
    await prismaService.$disconnect();
  }
};
