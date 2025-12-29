import ms, { StringValue } from 'ms';
import z from 'zod';

const expireInAcceptedFormatsText =
  "Invalid format, examples of accepted formats: 2 days, 1d, 10h, 2.5 hrs, 1m, 5s, 1y, 100'";

export const envConfigSchema = z.object({
  PORT: z.string().trim(),
  NODE_ENV: z.enum(['developer', 'production']),

  DATABASE_HOST: z.string().trim(),
  DATABASE_PORT: z.string().trim(),
  DATABASE_NAME: z.string().trim(),
  DATABASE_USER: z.string().trim(),
  DATABASE_PASSWORD: z.string().trim(),
  DATABASE_URL: z.string().trim(),

  RABBITMQ_PORT: z.string().trim(),
  RABBITMQ_USER: z.string().trim(),
  RABBITMQ_PASSWORD: z.string().trim(),
  RABBITMQ_MANAGEMENT_PORT: z.string().trim(),

  REDIS_PORT: z.string().trim(),
  ACCESS_TOKEN_SECRET_KEY: z.string().trim(),
  ACCESS_TOKEN_IN: z
    .string()
    .trim()
    .refine(
      (value) => {
        const msValue = ms(value as StringValue);
        return typeof msValue === 'number' && msValue > 0;
      },
      {
        error: expireInAcceptedFormatsText,
        abort: true,
      },
    ),
  REFRESH_TOKEN_SECRET_KEY: z.string().trim(),
  REFRESH_TOKEN_IN: z
    .string()
    .trim()
    .refine(
      (value) => {
        const msValue = ms(value as StringValue);
        return typeof msValue === 'number' && msValue > 0;
      },
      {
        error: expireInAcceptedFormatsText,
        abort: true,
      },
    ),
  COOKIE_SECRET_KEY: z.string().trim(),
  X_API_KEY: z.string().trim(),
});

export type TEnvConfigSchema = z.infer<typeof envConfigSchema>;
