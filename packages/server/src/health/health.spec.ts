import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { INestApplication } from '@nestjs/common';
import { AppModule } from '../app.module';

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
      .expect({
        status: 'ok',
        info: { postgres: { status: 'up' } },
        error: {},
        details: { postgres: { status: 'up' } },
      });
  });
});
