import { Prisma } from 'prisma/generated/client';

export const accountTypesMock: Prisma.AccountTypeUncheckedCreateInput[] = [
  {
    id: '01HFZ0A1ACC000000000000',
    name: 'Client',
    tag: 'client',
    description:
      'I want to find companions, view premium profiles, and book services securely.',
    is_public: true,
    default_role_id: '01HFZ0A1ROLE000000000000',
  },
  {
    id: '01HFZ0A1ACC000000000001',
    name: 'Escort',
    tag: 'escort',
    description:
      'I want to promote my profile, manage my availability, and receive contacts worldwide.',
    is_public: true,
    default_role_id: '01HFZ0A1ROLE000000000001',
  },
  {
    id: '01HFZ0A1ACC000000000002',
    name: 'Moderator',
    tag: 'moderator',
    description:
      'Staff member responsible for content moderation and profile approval',
    is_public: false,
    default_role_id: '01HFZ0A1ROLE000000000005',
  },
];
