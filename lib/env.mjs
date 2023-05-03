// @ts-check
import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
  server: {
    DOMAIN: z.string().url()
  },
  client: {},
  runtimeEnv: {
    DOMAIN: process.env.DOMAIN
  }
});
