import { Logger } from '@nestjs/common';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { profileLanguagesMock } from './mocks/profile-languages.mock';

const prismaService = new PrismaService();

export const createProfileLanguagesSeed = async () => {
  try {
    for (const profileLanguage of profileLanguagesMock) {
      await prismaService.profileLanguage.upsert({
        where: {
          code: profileLanguage.code,
        },
        update: {},
        create: profileLanguage,
      });
    }
  } catch (error) {
    Logger.error('createProfileLanguagesSeed', error);
    process.exit(1);
  } finally {
    await prismaService.$disconnect();
  }
};
