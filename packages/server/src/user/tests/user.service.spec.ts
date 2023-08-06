import { Test } from '@nestjs/testing';
import { UserService } from '../user.service';
import { mockedUser, fakeUserService } from '../../../libs/jest/mocks';

describe('UserService', () => {
  let service: UserService;

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
      mockedUser.full_name,
      mockedUser.password,
      mockedUser.email,
    );
    expect(user).toMatchObject(mockedUser);
  });
  it('should find and return user', async () => {
    const user = await service.findByMail('jest@mail.com');
    expect(user[0]).toMatchObject(mockedUser);
  });
  it('should not find and return user', async () => {
    const user = await service.findByMail('Jest@mail.com');
    expect(user.length).toBe(0);
  });
  it('should return all users', async () => {
    const user = await service.findAll();
    expect(user.length).toBe(2);
  });
  it('should return one user', async () => {
    const user = await service.findById(67);
    expect(user[0]).toMatchObject(mockedUser);
  });
  it('should return one user', async () => {
    const user = await service.findByName('Jest');
    expect(user).toMatchObject(mockedUser);
  });
});
