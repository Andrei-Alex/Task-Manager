import { Module } from '@nestjs/common';
import { HealthModule } from './health/health.module';
import dbConfiguration from './db.config';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {UserModule} from "./user/user.module";

@Module({
  imports: [
    HealthModule,
    UserModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '../../.env',
      load: [dbConfiguration],

    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        ...configService.get('database'),
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
