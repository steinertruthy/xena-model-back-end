import { ConfigGetOptions, ConfigService } from '@nestjs/config';
import { TEnvSchema } from '../schemas/env.schema';

export const getConfig = <T = string>(
  config: keyof TEnvSchema,
  options?: ConfigGetOptions,
): T => {
  const configService = new ConfigService<TEnvSchema>();

  if (options) {
    return configService.get(config, options) as T;
  }
  return configService.get(config) as T;
};
