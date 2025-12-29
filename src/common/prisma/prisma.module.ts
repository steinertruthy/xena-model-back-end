import { Global, Logger, Module, OnModuleInit } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global()
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule implements OnModuleInit {
  constructor(private readonly prisma: PrismaService) {}

  async onModuleInit() {
    try {
      await this.prisma.$queryRaw`SELECT 1`;
      Logger.log('prisma connected with success');
    } catch (error) {
      Logger.error('prisma not connected', JSON.stringify(error));
    }
  }
}
