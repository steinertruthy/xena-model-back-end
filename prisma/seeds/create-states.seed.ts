import { Logger } from '@nestjs/common';

import { PrismaService } from 'src/common/prisma/prisma.service';
import { statesMock } from './mocks/states.mock';

const prismaService = new PrismaService();

export const createStatesSeed = async () => {
  try {
    const country = await prismaService.country.findUnique({
      where: {
        code: 'BR',
      },
    });

    for (const state of statesMock) {
      await prismaService.state.upsert({
        where: {
          code: state.Sigla,
        },
        update: {},
        create: {
          name: state.Nome,
          code: state.Sigla,
          country_id: country?.id as string,
        },
      });
    }
  } catch (error) {
    Logger.error('createStatesSeed', error);
    process.exit(1);
  } finally {
    await prismaService.$disconnect();
  }
};
