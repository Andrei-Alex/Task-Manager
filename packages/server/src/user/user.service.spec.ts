import { Test } from '@nestjs/testing';
import { UserService } from './user.service';
import {
  Connection,
  createConnection,
  getConnection,
  getRepository,
  Repository,
} from 'typeorm';
import { User } from './User.entity';
import { ConfigService } from '@nestjs/config';
const configService = new ConfigService();
import { getRepositoryToken } from '@nestjs/typeorm';

// TODO: Change DB connection to DataSource
describe('UserService', () => {
  let repository: Repository<User>;
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
      entities: [User],
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
  });
});
