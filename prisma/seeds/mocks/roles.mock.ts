import { Prisma } from 'prisma/generated/client';

export const rolesMock: Prisma.RoleUncheckedCreateInput[] = [
  {
    id: '01HFZ0A1ROLE000000000000',
    name: 'Client',
    tag: 'client',
    description:
      'Client permissions to browse profiles, chat, and request bookings',
  },
  {
    id: '01HFZ0A1ROLE000000000001',
    name: 'Escort',
    tag: 'escort',
    description:
      'Escort permissions to manage profile, media, availability, and bookings',
  },
  {
    id: '01HFZ0A1ROLE000000000005',
    name: 'Administrator',
    tag: 'admin',
    description:
      'Administrator with full access to platform management and system settings',
  },
];
