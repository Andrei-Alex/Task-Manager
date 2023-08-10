import { ConfigService, registerAs } from '@nestjs/config';
import { DataSourceOptions } from 'typeorm';

import { User } from './user/User.entity';
import { Board } from './board/board.entity';
import { BoardColumn } from './column/column.entity';
import { migrations1690728646371 } from './migrations/migrations1690728646371';

const configService = new ConfigService();

/**
 * Register database configuration using the ConfigService.
 * @returns A configuration object for TypeORM's DataSourceOptions.
 */
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
    // TODO: Change entities and migrations imports
    entities: [User, Board, BoardColumn],
    migrations: [migrations1690728646371],
    cli: {
      migrationsDir: 'src/migrations',
    },
  } as DataSourceOptions;
});
