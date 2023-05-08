import { Redis } from '@upstash/redis';

import { env } from './env.mjs';

export const redis = new Redis({
  url: 'https://proven-mollusk-33857.upstash.io',
  token: env.UPSTASH_REDIS_REST_TOKEN
});
