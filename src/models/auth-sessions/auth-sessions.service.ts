import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/common/prisma/prisma.service';

@Injectable()
export class AuthSessionsService {
  constructor(private readonly prisma: PrismaService) {}
  me(userLoggedId: string) {
    return this.prisma.user.findUnique({
      where: {
        id: userLoggedId,
      },
    });
  }
}
