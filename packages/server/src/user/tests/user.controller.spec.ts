import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from '../user.controller';
import { UserService } from '../user.service';
import { AuthService } from '../../auth/auth.service';
import { EncryptionService } from '../../auth/encryption.service';
import { User } from '../User.entity';
import { fakeUserService, mockedUser } from '../../../libs/jest/mocks';
import { UserRepository } from '../user.repository';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

describe('AuthController', () => {
  let controller: UserController;
  const fakeEncryptionService: Partial<EncryptionService> = {};
  const fakeAuthService: Partial<AuthService> = {};
  const fakeUserRepository: Partial<UserRepository> = {
    findAllByName: (listOfNames: string[]) => Promise.resolve([]),
  };
  beforeAll(async () => {
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
