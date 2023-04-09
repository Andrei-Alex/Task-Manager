import { DataSource } from 'typeorm';
import {config} from 'dotenv'

config()

import {ConfigModule} from '@nestjs/config';
import dbConfiguration from './db.config';
import {User} from "./user/User.entity";

ConfigModule.forRoot({
  isGlobal: true,
  envFilePath: '../.env',

  load: [dbConfiguration],

});

export const AppDataSource = new DataSource(dbConfiguration());
