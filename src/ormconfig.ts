import dotenv from 'dotenv';
import path from 'path';
import { ConnectionOptions } from 'typeorm';

dotenv.config({
  path: path.join(__dirname, '.env'),
});

const { POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_DB, POSTGRES_PORT, POSTGRES_HOST } = process.env;
const RENDER_URL = `postgres://admin:XIgXt7dM3zVt5CuSYP60HwCWcOIFOxpy@dpg-cim0lilph6eg6kc4g8q0-a.frankfurt-postgres.render.com/kanban_uu0v`;

export default {
  type: 'postgres',
  cache: false,
  url: (process.env.DATABASE_URL as string) || RENDER_URL,
  synchronize: false,
  logging: false,
  ssl: {
    rejectUnauthorized: false,
  },
  entities: ['src/resources/**/**.entity{.ts,.js}'],
  migrations: ['./migrations/*.ts'],
} as ConnectionOptions;
