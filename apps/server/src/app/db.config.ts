import { ConfigService, registerAs } from '@nestjs/config';
import { DataSourceOptions } from 'typeorm';

const configService = new ConfigService();
console.log(configService.get('DB_HOST'));
export default registerAs('database', () => {
  return {
    type: 'postgres',
    host: configService.get('DB_HOST'),
    loggin: true,
    port: Number(configService.get('DB_PORT')),
    username: configService.get('DB_DATABASE'),
    password: configService.get('DB_PASSWORD'),
    database: configService.get('DB_DATABASE'),
    synchronize: false,
    migrationsRun: true,
    autoLoadEntities: true,
    entities: [`${__dirname}/**/*.entity.ts`],
    migrations: [`${__dirname}/../migrations/*{.ts,.js}`],
    cli: {
      migrationsDir: 'src/migrations',
    },
  } as DataSourceOptions;
});
