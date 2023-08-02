import { Module } from '@nestjs/common';
import { HealthModule } from './health/health.module';
import dbConfiguration from './db.config';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AppDataModule } from './appData/appData.module';
import { BoardModule } from './board/board.module';
import * as dotenv from 'dotenv';
dotenv.config();
console.log('test');
console.log(process.env.NODE_ENV);

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env.${process.env.NODE_ENV}`,
      load: [dbConfiguration],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        return {
          ...configService.get('database'),
        };
      },
    }),
    HealthModule,
    UserModule,
    AppDataModule,
    BoardModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
