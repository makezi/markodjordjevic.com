/* eslint-disable @typescript-eslint/no-var-requires */
const { createEnv } = require('@t3-oss/env-nextjs');
const { z } = require('zod');

const env = createEnv({
  skipValidation:
    !!process.env.SKIP_ENV_VALIDATION &&
    process.env.SKIP_ENV_VALIDATION !== 'false' &&
    process.env.SKIP_ENV_VALIDATION !== '0',
  server: {
    DOMAIN: z.string().url(),
    UPSTASH_REDIS_REST_TOKEN: z.string()
  },
  client: {},
  runtimeEnv: {
    DOMAIN: process.env.DOMAIN,
    UPSTASH_REDIS_REST_TOKEN: process.env.UPSTASH_REDIS_REST_TOKEN
  }
});

module.exports = env;
