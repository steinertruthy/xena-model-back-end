import { Logger } from '@nestjs/common';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { rolesMock } from './mocks/roles.mock';

const prismaService = new PrismaService();

export const createRolesSeed = async () => {
  try {
    for (const role of rolesMock) {
      await prismaService.role.upsert({
        where: {
          tag: role.tag,
        },
        update: {},
        create: role,
      });
    }
  } catch (error) {
    Logger.error('createRolesSeed', error);
    process.exit(1);
  } finally {
    await prismaService.$disconnect();
  }
};
