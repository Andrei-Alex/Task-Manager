import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { INestApplication } from '@nestjs/common';
import { AppModule } from '../../app.module';
import { ConfigService } from '@nestjs/config';
const configService = new ConfigService();
describe('HealthController', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();
    app = moduleFixture.createNestApplication();
    await app.init();
  });
  describe('Health Check', () => {
    it('should return status up', () => {
      const db = configService.get('DB_DATABASE');
      return request(app.getHttpServer())
        .get('/health')
        .expect({
          status: 'ok',
          info: { [db]: { status: 'up' } },
          error: {},
          details: { [db]: { status: 'up' } },
        });
    });
  });
});
