import { Prisma } from 'prisma/generated/client';

export const usersMock: Prisma.UserUncheckedCreateInput[] = [
  {
    name: 'John Client',
    email: 'client@test.com',
    account_type_id: '01HFZ0A1ACC000000000000',
    role_id: '01HFZ0A1ROLE000000000000',
  },
  {
    name: 'Sophia Escort',
    email: 'sophiaescort@test.com',
    account_type_id: '01HFZ0A1ACC000000000001',
    role_id: '01HFZ0A1ROLE000000000001',
  },
  {
    name: 'Aylla Escort',
    email: 'ayllaescort@test.com',
    account_type_id: '01HFZ0A1ACC000000000001',
    role_id: '01HFZ0A1ROLE000000000001',
  },
  {
    name: 'Jane Escort',
    email: 'janeescort@test.com',
    account_type_id: '01HFZ0A1ACC000000000001',
    role_id: '01HFZ0A1ROLE000000000001',
  },
  {
    name: 'System Admin',
    email: 'admin@test.com',
    account_type_id: '01HFZ0A1ACC000000000002',
    role_id: '01HFZ0A1ROLE000000000005',
  },
];
