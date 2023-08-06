import { UserService } from '../../../src/user/user.service';
import { User } from '../../../src/user/User.entity';
import { AuthService } from '../../../src/auth/auth.service';

export const mockedUser = {
  id: 67,
  full_name: 'Jest',
  password: 'unit-test',
  email: `jest@mail.com`,
};
export const mockedUser2 = {
  id: 7,
  full_name: 'Andrei',
  password: 'unit-test',
  email: `andrei@mail.com`,
  boards: [],
};
export let users: User[] = [mockedUser2];

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
export const fakeAuthService: Partial<AuthService> = {
  validateUser: (email: string, password: string): Promise<User> => {
    if (email && password) {
      const [user] = users.filter(
        (user) => user.email === email && user.password === password,
      );
      if (user) {
        delete user.password;
        return Promise.resolve(user as User);
      }
      return Promise.resolve(null);
    }
    return Promise.resolve(null);
  },
};
