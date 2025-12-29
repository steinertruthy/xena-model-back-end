import { Logger } from '@nestjs/common';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { gendersMock } from './mocks/genders.mock';

const prismaService = new PrismaService();

export const createGendersMock = async () => {
  try {
    for (const gender of gendersMock) {
      await prismaService.gender.upsert({
        where: {
          tag: gender.tag,
        },
        update: {},
        create: gender,
      });
    }
  } catch (error) {
    Logger.error('createGendersMock', error);
    process.exit(1);
  } finally {
    await prismaService.$disconnect();
  }
};
