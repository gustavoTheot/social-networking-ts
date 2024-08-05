import 'dotenv/config'
import z from 'zod'

const envSchema = z.object({
  NODE_ENV: z.enum(['dev', 'test', 'production']).default('dev'),
  PORT: z.coerce.number().default(3333),
  BUCKET_NAME: z.string(),
  BUCKET_REGION: z.string(),
  ACCESS_KEY: z.string(),
  SECRET_ACCESS_KEY: z.string(),
  MONGO_URL: z.string(),
  ENDPOINT: z.string(),
  SECRET: z.string().default('test'),
  REFRESH_TOKEN: z.string()
})

const _env = envSchema.safeParse(process.env)

if (_env.success === false) {
  console.log(_env.error.format)
  throw new Error('Invalid environment variable')
}

export const env = _env.data