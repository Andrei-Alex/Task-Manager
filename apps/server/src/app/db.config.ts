import { ConfigService, registerAs } from '@nestjs/config';
import { DataSourceOptions } from 'typeorm';

const configService = new ConfigService();
console.log(__dirname)
export default registerAs('database', () => {
  return {
    type: 'postgres',
    host: configService.get('DB_HOST'),
    logging: true,
    port: Number(configService.get('DB_PORT')),
    username: configService.get('DB_USER'),
    password: String(configService.get('DB_PASSWORD')),
    database: configService.get('DB_DATABASE'),
    synchronize: false,
    migrationsRun: true,
    autoLoadEntities: true,
    entities: [`${__dirname}/**/*.entity.ts`],
    migrations: [`${__dirname}/**/*{.ts,.js}`],
    cli: {
      migrationsDir: 'server/src/migrations/',
    },
  } as DataSourceOptions;
});
