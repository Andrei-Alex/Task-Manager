import { HttpStatus } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { INestApplication } from '@nestjs/common';
import { AppModule } from '../../app.module';
import * as jwt from 'jsonwebtoken';
import { ConfigService } from '@nestjs/config';
import { JwtAuthGuard } from '../../auth/jwt-auth.guard';

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
  });
  afterAll(async () => {
    await app.close();
  });

  describe('authentication/login (POST)', () => {
    it('should create new user and return full_name, email but not password', () => {
      return request(app.getHttpServer())
        .post('/auth/register')
        .set('Content-Type', 'application/json')
        .send({
          full_name: 'Johny BeGood',
          email: `johnyBeGood${random}@mail.com`,
          password: 'changeMe',
        })
        .expect(HttpStatus.CREATED)
        .then((response: request.Response) => {
          const email = response.body.email.toLowerCase();
          expect(response.body).not.toHaveProperty('password');
          expect(response.body).toHaveProperty('full_name');
          expect(response.body).toHaveProperty('email');
          expect(response.body.full_name).toEqual('Johny BeGood');
          expect(email).toEqual(expect.stringContaining('johnybegood'));
          expect(email).toEqual(expect.stringContaining('@mail.com'));
        });
    });

    it('should not log in nor return a JWT for an UNAUTHORIZED user (401)', () => {
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

    it('should not log in nor return a JWT for an BAD_REQUEST (400)', () => {
      return request(app.getHttpServer())
        .post('/auth/login')
        .set('Content-Type', 'application/json')
        .send({ username: 'John' })
        .expect(HttpStatus.BAD_REQUEST)
        .then((response: request.Response) => {
          const { token }: { token: string } = response.body;
          expect(token).toBeUndefined();
        });
    });

    it('should log in and return a valid JWT for a registered user', () => {
      return request(app.getHttpServer())
        .post('/auth/login')
        .set('Content-Type', 'application/json')
        .send({ username: 'johnyJohny@mail.com', password: 'changeMe' })
        .expect(201)
        .then((response: request.Response) => {
          expect(response.body).toHaveProperty('access_token');
          expect(
            jwt.verify(
              response.body.access_token,
              configService.get('SECRET_KEY'),
            ),
          ).toBeTruthy();
        });
    });
    it('should return access_token and login', () => {
      return request(app.getHttpServer())
        .post('/auth/login')
        .set('Content-Type', 'application/json')
        .send({ username: 'johnyJohny@mail.com', password: 'changeMe' })
        .expect(201)
        .then((response: request.Response) => {
          expect(response.body).toHaveProperty('access_token');
          expect(
            jwt.verify(
              response.body.access_token,
              configService.get('SECRET_KEY'),
            ),
          ).toBeTruthy();
        });
    });
  });
});

describe('UserController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture = await Test.createTestingModule({
      imports: [AppModule],
    })
      .overrideGuard(JwtAuthGuard)
      .useValue({ canActivate: () => true })
      .compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('/api/users (GET) should return all users', async () => {
    const response = await request(app.getHttpServer()).get('/auth/users');

    expect(response.status).toBe(200);
    console.log(response.body);
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body.length).toBeGreaterThan(0);
  });

  it('/api/users/:full_name (GET) should return users by name', async () => {
    const fullName = 'Johny BeGood';
    const response = await request(app.getHttpServer()).get(
      `/auth/users/${fullName}`,
    );
    expect(response.status).toBe(200);
    expect(response.status).toBe(200);
    expect(typeof response.body).toBe('object');
    expect(response.body).toHaveProperty('id');
    expect(response.body).toHaveProperty('full_name');
    expect(response.body).toHaveProperty('email');
  });
});
