import { Redis } from '@upstash/redis';

import env from './env';

export const redis = new Redis({
  url: 'https://sensible-grizzly-34633.upstash.io',
  token: env.UPSTASH_REDIS_REST_TOKEN
});
