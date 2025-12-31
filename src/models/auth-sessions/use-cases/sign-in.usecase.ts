import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import argon from 'argon2';
import dayjs from 'dayjs';
import ms, { StringValue } from 'ms';
import { DetectResult } from 'node-device-detector';
import { getConfig } from 'src/common/helpers/get-config.helper';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { UsersRepository } from 'src/models/users/users.repository';
import { CreateAuthSessionDto } from '../dto/create-auth-session.dto';

type TToken = 'access' | 'refresh';

interface IExecuteClientDetector {
  ip: string;
  detector: DetectResult;
}

@Injectable()
export class SignInUseCase {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
    private readonly usersRepository: UsersRepository,
  ) {}
  async execute(
    payload: CreateAuthSessionDto,
    clientDetector: IExecuteClientDetector,
  ) {
    const errorMessageText = 'email or password invalid';

    const userExists = await this.usersRepository.findUnique({
      where: {
        email: payload.email,
      },
      include: {
        accountType: {
          select: {
            tag: true,
          },
        },
        passwords: {
          where: {
            deleted: false,
          },
          select: {
            hash: true,
          },
        },
      },
    });

    if (!userExists || !userExists.passwords.length) {
      throw new BadRequestException(errorMessageText);
    }

    const isValidPassword = await argon.verify(
      userExists.passwords[0].hash,
      payload.password,
    );

    if (!isValidPassword) {
      throw new BadRequestException(errorMessageText);
    }

    const accessToken = await this.generateTokenData('access', {
      sub: userExists.id,
      accountTypeTag: userExists.accountType.tag,
    });
    const refreshToken = await this.createAuthSession(
      { sub: userExists.id },
      clientDetector,
    );

    return {
      accessToken,
      refreshToken,
    };
  }

  private async generateTokenData(
    type: TToken,
    payload: Record<string, unknown>,
  ) {
    let token = '';
    let expireInMs = 0;

    switch (type) {
      case 'access': {
        expireInMs = ms(getConfig<StringValue>('ACCESS_TOKEN_IN'));

        token = await this.jwtService.signAsync(payload, {
          secret: getConfig('ACCESS_TOKEN_SECRET_KEY'),
          expiresIn: expireInMs,
        });

        break;
      }
      case 'refresh': {
        expireInMs = ms(getConfig<StringValue>('REFRESH_TOKEN_IN'));

        token = await this.jwtService.signAsync(payload, {
          secret: getConfig('REFRESH_TOKEN_SECRET_KEY'),
          expiresIn: expireInMs,
        });
        break;
      }
    }

    return {
      token,
      expireDate: dayjs().add(expireInMs, 'milliseconds').toDate(),
    };
  }

  private async createAuthSession(
    payload: { sub: string },
    clientDetector: IExecuteClientDetector,
  ) {
    const refreshToken = await this.generateTokenData('refresh', payload);

    const currentDate = dayjs().toDate();

    const {
      ip,
      detector: { device },
    } = clientDetector;
    const deviceType =
      device.type && device.type != '' ? device.type : 'UNKNOWN';

    await this.prisma.$transaction(async (tx) => {
      await tx.authSession.updateMany({
        where: {
          user_id: payload.sub,
          expire_at: {
            gte: currentDate,
          },
        },
        data: {
          expire_at: currentDate,
        },
      });
      await tx.authSession.create({
        data: {
          user_id: payload.sub,
          refresh_token: refreshToken.token,
          expire_at: refreshToken.expireDate,
          original_expire_at: refreshToken.expireDate,
          device: deviceType,
          ip: ip,
        },
      });
    });

    return refreshToken;
  }
}
