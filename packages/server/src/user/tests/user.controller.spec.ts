import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from '../user.controller';
import { UserService } from '../user.service';
import { AuthService } from '../../auth/auth.service';
import { EncryptionService } from '../../auth/encryption.service';
import { User } from '../User.entity';
import {
  fakeUserService,
  fakeAuthService,
  fakeUserRepository,
  mockedUser,
} from '../../../libs/jest/mocks';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

describe('AuthController', () => {
  let controller: UserController;
  const createUserDto = {
    full_name: 'John Doe',
    password: 'password',
    email: 'john@example.com',
  };
  const user = { ...createUserDto, id: 1 };
  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [
        EncryptionService,
        {
          provide: getRepositoryToken(User),
          useClass: Repository,
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
          provide: getRepositoryToken(User),
          useValue: fakeUserRepository,
        },
      ],
    }).compile();

    controller = module.get<UserController>(UserController);
  });

  it('should create an instance of userService', async () => {
    expect(controller).toBeDefined();
  });
  it('should create an user', async () => {
    const newUser = await controller.createUser(createUserDto);
    expect(newUser).toEqual({
      email: createUserDto.email,
      full_name: createUserDto.full_name,
    });
  });
  it('should login and return JWT token', async () => {
    const req = { user };
    const loggedIn = await controller.login(req);
    expect(loggedIn).toEqual('Fake.JWT.Token');
  });
  it('should return user', async () => {
    const req = { user };
    const profile = await controller.getProfile(req);
    expect(profile).toEqual(req.user);
  });
});
