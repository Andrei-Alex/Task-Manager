import { UserService } from '../../../src/user/user.service';
import { User } from '../../../src/user/User.entity';

export let users: User[] = [];
export const mockedUser = {
  id: 67,
  full_name: 'Jest',
  password: 'unit-test',
  email: `jest@mail.com`,
};

export const fakeUserService: Partial<UserService> = {
  findAll: () => Promise.resolve(users),
  findById: (userId: number) =>
    Promise.resolve(users.filter((user: User) => user.id === userId)),
  findByName: (name: string) =>
    Promise.resolve(users.filter((user: User) => user.full_name === name)[0]),
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
