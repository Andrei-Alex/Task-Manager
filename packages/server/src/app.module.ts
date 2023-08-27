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
import { APP_INTERCEPTOR } from '@nestjs/core';
import { AppInterceptor } from './app.interceptors';
dotenv.config();

@Module({
  imports: [
    /**
     * Configure the ConfigModule to load environment variables and configuration.
     */
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env.${process.env.NODE_ENV}`,
      load: [dbConfiguration],
    }),
    /**
     * Configure the TypeOrmModule to connect to the database using configuration.
     */
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        return {
          ...configService.get('database'),
        };
      },
    }),
    /**
     * Imports
     */
    HealthModule,
    UserModule,
    AppDataModule,
    BoardModule,
  ],
  /**
   * Controllers associated with the AppModule.
   */
  controllers: [AppController],
  /**
   * Providers for services used within the AppModule.
   */
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: AppInterceptor,
    },
  ],
})
export class AppModule {}
