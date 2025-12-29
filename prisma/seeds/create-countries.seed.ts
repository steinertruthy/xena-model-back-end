import { Logger } from '@nestjs/common';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { countriesMock } from './mocks/countries.mock';

const prismaService = new PrismaService();

export const createCountriesSeed = async () => {
  try {
    for (const country of countriesMock) {
      await prismaService.country.upsert({
        where: {
          code: 'BR',
        },
        update: {},
        create: country,
      });
    }
  } catch (error) {
    Logger.error('createCountriesSeed', error);
    process.exit(1);
  } finally {
    await prismaService.$disconnect();
  }
};
