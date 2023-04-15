// @ts-check
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { z } = require('zod');

const serverSchema = z.object({
  DOMAIN: z.string().url(),
  NODE_ENV: z.enum(['development', 'test', 'production'])
});

const parsed = serverSchema.safeParse(process.env);

if (!parsed.success) {
  console.error(
    '❌ Invalid environment variables:',
    parsed.error.flatten().fieldErrors
  );
  process.exit(1);
}

module.exports.env = parsed.data;
