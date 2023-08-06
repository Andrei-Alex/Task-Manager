import { Test } from '@nestjs/testing';
import {
  fakeAuthService,
  mockedUser2,
  fakeJWTService,
} from '../../../libs/jest/mocks';
import { AuthService } from '../auth.service';
import { JwtService } from '@nestjs/jwt';

describe('AuthService', () => {
  let service: AuthService;
  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        {
          provide: AuthService,
          useValue: fakeAuthService,
        },
        {
          provide: JwtService,
          useValue: fakeJWTService,
        },
      ],
    }).compile();
    service = module.get(AuthService);
  });

  afterEach(() => {
    jest.clearAllMocks();
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
  it('should not return user password if incorrect email', async () => {
    const user = await service.validateUser('notUser@mail.com', 'unit-test');
    expect(user).toEqual(null);
  });
  it('should not return user password if incorrect password', async () => {
    const user = await service.validateUser('andrei@mail.com', 'incorrect');
    expect(user).toEqual(null);
  });
  it('should return JWT token', async () => {
    const access_token = await service.login(mockedUser2);
    expect(access_token).toEqual('Fake.JWT.Token');
  });
});
