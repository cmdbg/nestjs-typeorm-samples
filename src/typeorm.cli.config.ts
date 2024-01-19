import { join } from 'path';
import dotenv from 'dotenv';
import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';

dotenv.config();

export const typeormCliConfig: MysqlConnectionOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  charset: 'utf8mb4',
  cache: true,
  username: 'root',
  password: 'toor',
  database: 'typeorm-samples',
  insecureAuth: true,
  synchronize: false,
  logger: 'advanced-console',
  entities: [join('src', '**', '*.entity.{ts,js}')],
  migrations: [join('migrations', '*.{ts,js}')],
  migrationsTableName: 'migrations_typeorm',
  migrationsRun: true,
};
