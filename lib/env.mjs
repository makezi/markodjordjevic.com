// @ts-check
import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
  skipValidation:
    !!process.env.SKIP_ENV_VALIDATION &&
    process.env.SKIP_ENV_VALIDATION !== 'false' &&
    process.env.SKIP_ENV_VALIDATION !== '0',
  server: {
    DOMAIN: z.string().url()
  },
  client: {},
  runtimeEnv: {
    DOMAIN: process.env.DOMAIN
  }
});
