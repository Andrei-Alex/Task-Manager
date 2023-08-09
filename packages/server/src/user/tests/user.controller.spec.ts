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
  mockedUser2,
  users,
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
  const user = { ...mockedUser };
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
  it('should return all user', async () => {
    const users = await controller.getUsers();
    expect(users).toEqual(users);
    expect(users).toHaveLength(2);
  });
  it('should return a single user', async () => {
    const users = await controller.getUsers({
      full_name: 'Andrei',
    });
    const { password, ...testUser } = mockedUser2;
    expect(users).toMatchObject(testUser);
  });
  it('should delete user', async () => {
    const deleteUserSpy = jest.spyOn(controller, 'deleteUser');
    await controller.deleteUser(mockedUser2.email);
    expect(users).toHaveLength(1);
    expect(deleteUserSpy).toHaveBeenCalledWith('andrei@mail.com');
  });
});
