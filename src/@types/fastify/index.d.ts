import 'fastify';
import { IUserLogged } from 'src/interfaces/user-logged';

declare module 'fastify' {
  export interface FastifyRequest {
    user?: IUserLogged;
  }
}
