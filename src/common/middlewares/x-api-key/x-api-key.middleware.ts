import {
  BadRequestException,
  Injectable,
  NestMiddleware,
  UnauthorizedException,
} from '@nestjs/common';
import { FastifyReply, FastifyRequest } from 'fastify';
import { getConfig } from 'src/common/helpers/get-config.helper';

@Injectable()
export class XApiKeyMiddleware implements NestMiddleware {
  use(req: FastifyRequest, res: FastifyReply, next: () => void) {
    const xApiKey = req.headers['x-api-key'];

    if (!xApiKey) {
      throw new BadRequestException('Where is the x api key?');
    }

    if (!(xApiKey === getConfig('X_API_KEY'))) {
      throw new UnauthorizedException('invalid x api key');
    }

    next();
  }
}
