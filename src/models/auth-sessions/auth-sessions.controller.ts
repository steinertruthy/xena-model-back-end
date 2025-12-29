import {
  Body,
  Controller,
  Patch,
  Post,
  Req,
  Res,
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common';
import { type FastifyReply, type FastifyRequest } from 'fastify';
import DeviceDetector from 'node-device-detector';
import { AuthGuard } from 'src/common/guards/auth.guard';
import { getConfig } from 'src/common/helpers/get-config.helper';
import { AuthSessionsService } from './auth-sessions.service';
import { CreateAuthSessionDto } from './dto/create-auth-session.dto';
import { SignInUseCase } from './use-cases/sign-in.usecase';

@Controller('auth-sessions')
export class AuthSessionsController {
  constructor(
    private readonly authSessionsService: AuthSessionsService,
    private readonly SignInUseCase: SignInUseCase,
  ) {}

  @Post()
  async signIn(
    @Req() req: FastifyRequest,
    @Res({ passthrough: true }) res: FastifyReply,
    @Body() createAuthSessionDto: CreateAuthSessionDto,
  ) {
    const detectResult = this.getClientDetector(req);
    const { accessToken, refreshToken } = await this.SignInUseCase.execute(
      createAuthSessionDto,
      {
        ip: req.ip,
        detector: detectResult,
      },
    );

    if (createAuthSessionDto.cookiesEnabled) {
      res.setCookie('access_token', accessToken.token, {
        expires: accessToken.expireDate,
        httpOnly: true,
        secure: getConfig('NODE_ENV') === 'production',
      });
      res.setCookie('refresh_token', refreshToken.token, {
        expires: refreshToken.expireDate,
        httpOnly: true,
        secure: getConfig('NODE_ENV') === 'production',
      });

      return res.code(204).send();
    }

    res.clearCookie('access_token');
    res.clearCookie('refresh_token');

    return {
      access_token: accessToken.token,
      refresh_token: refreshToken.token,
    };
  }

  @Patch('/me')
  @UseGuards(AuthGuard)
  async me(@Req() req: FastifyRequest) {
    return this.authSessionsService.me(req.user!.id);
  }

  private getUserAgent(req: FastifyRequest) {
    const userAgent = req.headers['user-agent'];

    if (!userAgent) {
      throw new UnauthorizedException('user agent not found');
    }
    return userAgent;
  }

  private getClientDetector(req: FastifyRequest) {
    const userAgent = this.getUserAgent(req);
    const detector = new DeviceDetector();
    return detector.detect(userAgent);
  }
}
