import { Logger } from '@nestjs/common';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { profileHairColorsMock } from './mocks/profile-hair-colors.mock';

const prismaService = new PrismaService();

export const createProfileHairColorsSeed = async () => {
  try {
    for (const profileHairColor of profileHairColorsMock) {
      await prismaService.profileHairColor.upsert({
        where: {
          tag: profileHairColor.tag,
        },
        update: {},
        create: profileHairColor,
      });
    }
  } catch (error) {
    Logger.error('createProfileHairColorsSeed', error);
    process.exit(1);
  } finally {
    await prismaService.$disconnect();
  }
};
