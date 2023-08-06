import { Test } from '@nestjs/testing';
import {
  mockedUser,
  fakeUserService,
  fakeAuthService,
  users,
  mockedUser2,
} from '../../../libs/jest/mocks';
import { AuthService } from '../auth.service';

describe('AuthService', () => {
  let service: AuthService;
  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        AuthService,
        {
          provide: AuthService,
          useValue: fakeAuthService,
        },
      ],
    }).compile();
    service = module.get(AuthService);
  });
  it('Create an instance of authService', async () => {
    expect(service).toBeDefined();
  });
  it('Should return user without password if correct user', async () => {
    const user = await service.validateUser('andrei@mail.com', 'unit-test');
    expect(user).toHaveProperty('full_name');
    expect(user).toHaveProperty('email');
    expect(user).not.toHaveProperty('password');
    expect(user.full_name).toEqual(mockedUser2.full_name);
    expect(user.email).toEqual(mockedUser2.email);
  });
  it('Should return user without password if correct user', async () => {
    const user = await service.validateUser('notUser@mail.com', 'unit-test');
    expect(user).toEqual(null);
  });
});
