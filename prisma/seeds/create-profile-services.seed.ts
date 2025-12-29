import { Logger } from '@nestjs/common';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { profileServicesMock } from './mocks/profile-services.mock';

const prismaService = new PrismaService();

export const createProfileServicesSeed = async () => {
  try {
    for (const profileService of profileServicesMock) {
      await prismaService.profileService.upsert({
        where: {
          tag: profileService.tag,
        },
        update: {},
        create: profileService,
      });
    }
  } catch (error) {
    Logger.error('createProfileServicesSeed', error);
    process.exit(1);
  } finally {
    await prismaService.$disconnect();
  }
};
