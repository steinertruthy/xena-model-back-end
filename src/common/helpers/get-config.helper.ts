import { ConfigGetOptions, ConfigService } from '@nestjs/config';
import { TEnvConfigSchema } from 'src/config/env.config';

export const getConfig = <T = string>(
  config: keyof TEnvConfigSchema,
  options?: ConfigGetOptions,
): T => {
  const configService = new ConfigService<TEnvConfigSchema>();

  if (options) {
    return configService.get(config, options) as T;
  }
  return configService.get(config) as T;
};
