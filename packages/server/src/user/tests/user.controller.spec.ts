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
import { UserRepository } from '../user.repository';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { fakeEncryptionService } from '../../../dist/libs/jest/mocks';

describe('AuthController', () => {
  let controller: UserController;
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

  it('Create an instance of userService', async () => {
    expect(controller).toBeDefined();
  });
  it('Create an user', async () => {
    const createUserDto = {
      full_name: 'John Doe',
      password: 'password',
      email: 'john@example.com',
    };

    const result = await controller.createUser(createUserDto);
    expect(result).toEqual({
      email: createUserDto.email,
      full_name: createUserDto.full_name,
    });
  });
});
