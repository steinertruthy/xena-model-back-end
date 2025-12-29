import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JsonWebTokenError, JwtService } from '@nestjs/jwt';
import { FastifyRequest } from 'fastify';
import { Observable } from 'rxjs';
import { getConfig } from '../helpers/get-config.helper';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly jwtService: JwtService) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request: FastifyRequest = context.switchToHttp().getRequest();

    const accessToken = this.extractAccessToken(request);
    const tokenPayload = this.validatedToken(accessToken);

    if (tokenPayload) {
      request.user = {
        ...tokenPayload,
        id: tokenPayload?.sub,
      };
      return true;
    }

    return false;
  }

  private extractAccessToken(request: FastifyRequest) {
    const headerToken = request.headers.authorization?.split(' ')[1];

    if (headerToken) {
      return headerToken;
    }

    const cookieToken = request.cookies['access_token'];

    if (cookieToken) {
      return cookieToken;
    }

    throw new UnauthorizedException('token invalid');
  }

  private validatedToken(token: string) {
    const secretKey = getConfig('ACCESS_TOKEN_SECRET_KEY');

    try {
      return this.jwtService.verify<{
        sub: string;
        accountTypeTag: string;
      }>(token, {
        secret: secretKey,
      });
    } catch (error) {
      if (error instanceof JsonWebTokenError) {
        throw new UnauthorizedException(error.message);
      }
    }
  }
}
