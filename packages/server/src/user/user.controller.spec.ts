import { HttpStatus } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { INestApplication } from '@nestjs/common';
import { AppModule } from '../app.module';
import * as jwt from 'jsonwebtoken';

import { ConfigService } from '@nestjs/config';

const configService = new ConfigService();

describe('AuthController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();
    app = moduleFixture.createNestApplication();
    await app.init();
  });

  describe('authentication/login (POST)', () => {
    it('it should not log in nor return a JWT for an unregistered user', () => {
      return request(app.getHttpServer())
        .post('/auth/login')
        .set('Content-Type', 'application/json')
        .send({ username: 'John', password: 'badpass' })
        .expect((response: request.Response) => {
          const { token }: { token: string } = response.body;
          expect(token).toBeUndefined();
        })
        .expect(HttpStatus.UNAUTHORIZED);
    });

    it('it should not log in nor return a JWT for an unregistered user', () => {
      return request(app.getHttpServer())
        .post('/auth/login')
        .set('Content-Type', 'application/json')
        .send({ username: 'john' })
        .expect((response: request.Response) => {
          const { token }: { token: string } = response.body;
          expect(token).toBeUndefined();
        })
        .expect(HttpStatus.BAD_REQUEST);
    });

    it('it should log in and return a JWT for a registered user', () => {
      return request(app.getHttpServer())
        .post('/auth/login')
        .set('Content-Type', 'application/json')
        .send({ username: 'john@mail.com', password: 'changeme' })
        .expect((response: request.Response) => {
          const token = response.body.access_token;
          expect(
            jwt.verify(token, configService.get('SECRET_KEY')),
          ).toBeTruthy();
        });
    });
  });
});
