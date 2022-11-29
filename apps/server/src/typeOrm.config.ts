import { DataSource } from 'typeorm';

import { ConfigModule, ConfigService } from '@nestjs/config';
import dbConfiguration from '../db.config';

ConfigModule.forRoot({
  isGlobal: true,
  envFilePath: '../.env',
  load: [dbConfiguration],
});

export const AppDataSource = new DataSource(dbConfiguration());
