import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from '../user.controller';
import { UserService } from '../user.service';
import { AuthService } from '../../auth/auth.service';
import { EncryptionService } from '../../auth/encryption.service';
import { User } from '../User.entity';
import { CreateUserDto } from '../user.DTO';
import { UserRepository } from '../user.repository';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

describe('AuthController (e2e)', () => {
  const mockedUser = {
    id: 67,
    full_name: 'Jest',
    password: 'unit-test',
    email: `jest@mail.com`,
  };
  let controller: UserController;
  let users: User[] = [];
  let fakeUserService: Partial<UserService> = {};
  const fakeEncryptionService: Partial<EncryptionService> = {};
  const fakeAuthService: Partial<AuthService> = {};
  const fakeUserRepository: Partial<UserRepository> = {
    findAllByName: (listOfNames: string[]) => Promise.resolve([]),
  };
  beforeAll(async () => {
    fakeUserService = {
      findAll: () => Promise.resolve(users),
      findById: (userId: number) =>
        Promise.resolve(users.filter((user: User) => user.id === userId)),
      findByName: (name: string) =>
        Promise.resolve(
          users.filter((user: User) => user.full_name === name)[0],
        ),
      findByMail: (email: string) =>
        Promise.resolve(users.filter((user: User) => user.email === email)),
      create: (full_name: string, password: string, email: string) => {
        const user = {
          id: mockedUser.id,
          full_name: full_name,
          password: password,
          email: email,
        } as User;
        users = [...users, user];
        return Promise.resolve(user);
      },
    };
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [
        {
          provide: getRepositoryToken(User),
          useClass: Repository,
        },
        {
          provide: EncryptionService,
          useValue: fakeEncryptionService,
        },
        {
          provide: UserService,
          useValue: fakeUserService,
        },
        {
          provide: AuthService,
          useValue: fakeAuthService,
        },
        {
          provide: UserRepository,
          useValue: fakeUserRepository,
        },
      ],
    }).compile();

    controller = module.get<UserController>(UserController);
  });

  it('Create an instance of userService', async () => {
    expect(controller).toBeDefined();
  });
});
