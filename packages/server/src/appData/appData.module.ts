import { Module } from '@nestjs/common';
import { AppDataController } from './appData.controller';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot({ envFilePath: '../../env' })],
  controllers: [AppDataController],
})
export class AppDataModule {}
