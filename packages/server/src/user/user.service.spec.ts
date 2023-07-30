import { Test } from '@nestjs/testing';
import { UserService } from './user.service';
import { User } from './User.entity';

describe('UserService', () => {
  // TODO: No reason for findById to return array
  let service: UserService;
  beforeEach(async () => {
    const fakeUserService: Partial<UserService> = {
      findAll: () => Promise.resolve([]),
      findByMail: (email: string) =>
        Promise.resolve([
          {
            full_name: 'Jest',
            password: 'unit-test',
            email: `jest@mail.com`,
          },
        ] as User[]),
      create: (full_name: string, password: string, email: string) =>
        Promise.resolve({
          full_name: full_name,
          password: password,
          email: email,
        } as User),
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
    service = module.get(UserService);
  });
  it('Create an instance of userService', async () => {
    expect(service).toBeDefined();
  });

  it('should create user', async () => {
    const payload = {
      full_name: 'Jest',
      password: 'unit-test',
      email: `jest@mail.com`,
    };
    const user = await service.create(
      payload.full_name,
      payload.password,
      payload.email,
    );
    expect(user).toMatchObject(payload);
  });

  it('should find and return user', async () => {
    const user: User[] = await service.findByMail('Jest@mail.com');
    expect(user[0].full_name).toBe('Jest');
  });
});
