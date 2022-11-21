import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { INestApplication } from '@nestjs/common';
import { AppModule } from '../app/app.module';

describe('HealthController', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();
    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/health  (GET)', () => {
    return request(app.getHttpServer())
      .get('/health')
      .expect({"status":"ok","info":{"nestjs-docs":{"status":"up"}},"error":{},"details":{"nestjs-docs":{"status":"up"}}});
  });
});