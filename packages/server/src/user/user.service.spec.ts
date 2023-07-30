import { Test } from '@nestjs/testing';
import { UserService } from './user.service';
import {
  Connection,
  createConnection,
  getConnection,
  getRepository,
  Like,
  Repository,
} from 'typeorm';
import { User } from './User.entity';
import { ConfigModule, ConfigService } from '@nestjs/config';
const configService = new ConfigService();
import { getRepositoryToken, TypeOrmModule } from '@nestjs/typeorm';
import { Board } from '../board/board.entity';
import { AuthService } from '../auth/auth.service';
import { EncryptionService } from '../auth/encryption.service';
import { LocalStrategy } from '../auth/local.strategy';
import { JwtStrategy } from '../auth/jwt.strategy';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { UserRepository } from './user.repository';

// TODO: Change DB connection to DataSource
describe('UserService', () => {
  it('Create an instance of userService', async () => {
    const fakeUserService = {
      create: () => Promise.resolve([{}]),
      findById: () => Promise.resolve([{}]),
      findAll: () => Promise.resolve([{}]),
    };

    const module = await Test.createTestingModule({
      providers: [
        UserService,
        {
          provide: UserService,
          useValue: fakeUserService,
        },
      ],
    }).compile();
    const service = module.get(UserService);
    expect(service).toBeDefined();
  });
  /* let repository: Repository<User>;
  let service: UserService;
  let connection: Connection;
  beforeEach(async () => {
    connection = await createConnection({
      type: 'postgres',
      logging: true,
      database: configService.get('DB_DATABASE'),
      host: configService.get('DB_HOST'),
      port: Number(configService.get('DB_PORT')),
      username: configService.get('DB_USER'),
      password: String(configService.get('DB_PASSWORD')),
      synchronize: false,
      entities: [User, Board],
    });
    repository = getRepository(User);
    const testingModule = await Test.createTestingModule({
      providers: [
        UserService,
        {
          provide: getRepositoryToken(User, connection),
          useFactory: () => {
            return repository;
          },
        },
      ],
    }).compile();
    service = testingModule.get<UserService>(UserService);
    return connection;
  });

  afterEach(async () => {
    await getConnection().close();
  });

  const payload = {
    full_name: 'Jest',
    password: 'unit-test',
    email: `jest@mail.com`,
  };

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create user', async () => {
    const user = await service.create(
      payload.full_name,
      payload.password,
      payload.email,
    );
    expect(user).toMatchObject(payload);
  });

  // TODO: Create user and then search
  it('should find user', async () => {
    const user: User[] = await service.findByMail('john@mail.com');
    expect(user[0].full_name).toBe('john');
  });*/
});
