import { Module } from '@nestjs/common';
import { AppDataController } from './appData.controller';
import { ConfigModule } from '@nestjs/config';
import * as dotenv from 'dotenv';
dotenv.config();
@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: `.env.${process.env.NODE_ENV}` }),
  ],
  controllers: [AppDataController],
})
export class AppDataModule {}
