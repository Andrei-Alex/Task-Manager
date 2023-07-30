import { ConfigService, registerAs } from '@nestjs/config';
import { DataSourceOptions } from 'typeorm';
import { migrations1668411426720 } from './migrations/1670173571238-Users';
import { User } from './user/User.entity';
import { Board } from './board/board.entity';
import { BoardColumn } from './column/column.entity';
const configService = new ConfigService();

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
    migrations: [migrations1668411426720],
    cli: {
      migrationsDir: 'src/migrations',
    },
  } as DataSourceOptions;
});
