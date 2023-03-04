import { DataSource } from 'typeorm';

// TODO: Import from ENV
export const dataSource = new DataSource({
  type: 'postgres',
  host:  'localhost',
  port:  5432,
  username:  'postgres',
  password:  'postgres',
  database:  'postgres',
  synchronize: false,
  migrationsRun: true,
  entities: [`${__dirname}/**/*.entity.ts`],
  migrations: [`${__dirname}/../migrations/*{.ts,.js}`],
});
