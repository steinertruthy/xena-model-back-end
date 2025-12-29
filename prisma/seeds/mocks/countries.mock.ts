import { Prisma } from 'prisma/generated/client';

export const countriesMock: Prisma.CountryUncheckedCreateInput[] = [
  {
    name: 'Brasil',
    code: 'BR',
    currency_code: 'BRL',
  },
];
