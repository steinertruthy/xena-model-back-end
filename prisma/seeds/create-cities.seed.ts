import { Logger } from '@nestjs/common';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { citiesMock } from './mocks/cities.mock';
import { statesMock } from './mocks/states.mock';

const prismaService = new PrismaService();

export const createCitiesMock = async () => {
  try {
    const allStates = await prismaService.state.findMany({
      where: {
        deleted: false,
      },
    });

    for (const state of allStates) {
      const stateOriginalIdMock = statesMock.find(
        (stateMock) => stateMock.Sigla === state.code,
      )?.ID;

      const citiesFilteredMock = citiesMock.filter(
        (cityMock) => cityMock.Estado === stateOriginalIdMock,
      );

      for (const cityMock of citiesFilteredMock) {
        await prismaService.city.upsert({
          where: {
            code: cityMock.ID,
          },
          update: {},
          create: {
            name: cityMock.Nome,
            code: cityMock.ID,
            state_id: state.id,
          },
        });
      }
    }
  } catch (error) {
    Logger.error('createCitiesMock', error);
    process.exit(1);
  } finally {
    await prismaService.$connect();
  }
};
