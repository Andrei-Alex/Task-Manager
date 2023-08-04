import { Test } from '@nestjs/testing';
import { UserService } from './user.service';
import { User } from './User.entity';

describe('UserService', () => {
  const payload = {
    id: 67,
    full_name: 'Jest',
    password: 'unit-test',
    email: `jest@mail.com`,
  };
  let users: User[] = [];
  let service: UserService;
  const fakeUserService: Partial<UserService> = {
    findAll: () => Promise.resolve(users),
    findById: (userId: number) =>
      Promise.resolve(users.filter((user: User) => user.id === userId)),
    findByName: (name: string) =>
      Promise.resolve(users.filter((user: User) => user.full_name === name)[0]),
    findByMail: (email: string) =>
      Promise.resolve(users.filter((user: User) => user.email === email)),
    create: (full_name: string, password: string, email: string) => {
      const user = {
        id: payload.id,
        full_name: full_name,
        password: password,
        email: email,
      } as User;
      users = [...users, user];
      return Promise.resolve(user);
    },
  };
  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        UserService,
        {
          provide: UserService,
          useValue: fakeUserService,
        },
      ],
    }).compile();
    service = module.get(UserService);
  });
  it('Create an instance of userService', async () => {
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
  it('should find and return user', async () => {
    const user = await service.findByMail('jest@mail.com');
    expect(user[0]).toMatchObject(payload);
  });
  it('should not find and return user', async () => {
    const user = await service.findByMail('Jest@mail.com');
    expect(user.length).toBe(0);
  });
  it('should return all users', async () => {
    const user = await service.findAll();
    expect(user.length).toBe(1);
  });
  it('should return one user', async () => {
    const user = await service.findById(67);
    expect(user[0]).toMatchObject(payload);
  });
  it('should return one user', async () => {
    const user = await service.findByName('Jest');
    expect(user).toMatchObject(payload);
  });
});
