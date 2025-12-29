import { PrismaPg } from '@prisma/adapter-pg';

import { PrismaClient } from 'prisma/generated/client';
import { getConfig } from '../helpers/get-config.helper';

export class PrismaService extends PrismaClient {
  constructor() {
    const connectionString = getConfig('DATABASE_URL');

    const adapter = new PrismaPg({ connectionString });
    super({ adapter });
  }
}
