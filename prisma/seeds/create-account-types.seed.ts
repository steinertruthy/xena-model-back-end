import { Logger } from '@nestjs/common';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { accountTypesMock } from './mocks/account-types.mock';

const prismaService = new PrismaService();

export const createAccountTypesSeed = async () => {
  try {
    for (const accountType of accountTypesMock) {
      await prismaService.accountType.upsert({
        where: {
          tag: accountType.tag,
        },
        update: {},
        create: accountType,
      });
    }
  } catch (error) {
    Logger.error('createAccountTypesSeed', error);
    process.exit(1);
  } finally {
    await prismaService.$disconnect();
  }
};
