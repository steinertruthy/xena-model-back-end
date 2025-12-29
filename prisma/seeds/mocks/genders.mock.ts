import { Prisma } from 'prisma/generated/client';

export const gendersMock: Prisma.GenderUncheckedCreateInput[] = [
  {
    name: 'Female',
    tag: 'female',
  },
  {
    name: 'Male',
    tag: 'male',
  },
  {
    name: 'Transgender',
    tag: 'transgender',
  },
];
