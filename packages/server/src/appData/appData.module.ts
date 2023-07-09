import { Module } from '@nestjs/common';
import { AppDataController } from './AppData.controller';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot({ envFilePath: '../../env' })],
  controllers: [AppDataController],
})
export class AppDataModule {}
