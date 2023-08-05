import { HttpStatus } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { INestApplication } from '@nestjs/common';
import { AppModule } from '../../app.module';
import * as jwt from 'jsonwebtoken';
import { ConfigService } from '@nestjs/config';

const configService = new ConfigService();
const random = Math.floor(Math.random() * 1283);
describe('AuthController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();
    app = moduleFixture.createNestApplication();
    await app.init();
    return request(app.getHttpServer())
      .post('/auth/register')
      .set('Content-Type', 'application/json')
      .send({
        full_name: 'JohnyJohny',
        email: 'johnyJohny@mail.com',
        password: 'changeMe',
      });
  });

  describe('authentication/login (POST)', () => {
    it('should create new user', () => {
      return request(app.getHttpServer())
        .post('/auth/register')
        .set('Content-Type', 'application/json')
        .send({
          full_name: 'Johny BeGood',
          email: `johnyBeGood${random}@mail.com`,
          password: 'changeMe',
        })
        .expect(HttpStatus.CREATED);
    });

    it('should not log in nor return a JWT for an unregistered user', () => {
      return request(app.getHttpServer())
        .post('/auth/login')
        .set('Content-Type', 'application/json')
        .send({ username: 'JohnyJohny', password: 'badpass' })
        .expect((response: request.Response) => {
          const { token }: { token: string } = response.body;
          expect(token).toBeUndefined();
        })
        .expect(HttpStatus.UNAUTHORIZED);
    });

    it('should not log in nor return a JWT for an unregistered user', () => {
      return request(app.getHttpServer())
        .post('/auth/login')
        .set('Content-Type', 'application/json')
        .send({ username: 'John' })
        .expect((response: request.Response) => {
          const { token }: { token: string } = response.body;
          expect(token).toBeUndefined();
        })
        .expect(HttpStatus.BAD_REQUEST);
    });

    it('should log in and return a JWT for a registered user', () => {
      return request(app.getHttpServer())
        .post('/auth/login')
        .set('Content-Type', 'application/json')
        .send({ username: 'johnyJohny@mail.com', password: 'changeMe' })
        .expect((response: request.Response) => {
          const token = response.body.access_token;
          expect(
            jwt.verify(token, configService.get('SECRET_KEY')),
          ).toBeTruthy();
        });
    });
  });
});
