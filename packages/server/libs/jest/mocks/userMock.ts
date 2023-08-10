import { UserService } from '../../../src/user/user.service';
import { User } from '../../../src/user/User.entity';
import { AuthService } from '../../../src/auth/auth.service';
import { JwtService } from '@nestjs/jwt';
import { UserRepository } from '../../../src/user/user.repository';

/**
 * Mocked User data for testing purposes.
 */
export const mockedUser = {
  id: 67,
  full_name: 'Jest',
  password: 'unit-test',
  email: `jest@mail.com`,
};

/**
 * Another Mocked User data for testing purposes.
 */
export const mockedUser2 = {
  id: 7,
  full_name: 'Andrei',
  password: 'unit-test',
  email: `andrei@mail.com`,
  boards: [],
};

/**
 * Array of mocked User objects.
 */
export let users: User[] = [mockedUser2];

/**
 * Fake UserService for testing purposes.
 */
export const fakeUserService: Partial<UserService> = {
  /**
   * Mock implementation of the findAll method.
   *
   * @returns A Promise resolving to an array of user objects.
   */
  findAll: () => Promise.resolve(users),

  /**
   * Mock implementation of the findById method.
   *
   * @param userId - The ID of the user.
   * @returns A Promise resolving to an array of user objects matching the given ID.
   */
  findById: (userId: number) =>
    Promise.resolve(users.filter((user: User) => user.id === userId)),

  /**
   * Mock implementation of the findByName method.
   *
   * @param name - The name to search for.
   * @returns A Promise resolving to an array of user objects matching the given name.
   */
  findByName: (name: string) =>
    Promise.resolve(users.filter((user: User) => user.full_name === name)[0]),

  /**
   * Mock implementation of the findByMail method.
   *
   * @param email - The email to search for.
   * @returns A Promise resolving to an array of user objects matching the given email.
   */
  findByMail: (email: string) =>
    Promise.resolve(users.filter((user: User) => user.email === email)),

  /**
   * Mock implementation of the create method.
   *
   * @param full_name - The full name of the user.
   * @param password - The password of the user.
   * @param email - The email of the user.
   * @returns A Promise resolving to the created user object.
   */
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

  /**
   * Mock implementation of the deleteByMail method.
   *
   * @param email - The email of the user to delete.
   * @returns A Promise resolving once the user is deleted.
   */
  deleteByMail: (email: string) => {
    users = users.filter((user: User) => user.email !== email);
    return Promise.resolve();
  },
};
/**
 * Fake AuthService for testing purposes.
 */
export const fakeAuthService: Partial<AuthService> = {
  /**
   * Mock implementation of the validateUser method.
   *
   * @param email - The user's email.
   * @param password - The user's password.
   * @returns A Promise resolving to a user if valid, otherwise null.
   */
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

  /**
   * Mock implementation of the login method.
   *
   * @param user - The user object.
   * @returns A Promise resolving to an access token if valid user, otherwise null.
   */
  login: (user: Partial<User>) => {
    if (user.id && user.email) {
      const access_token = fakeJWTService.sign({
        email: user.email,
        sub: user.id,
      });
      return Promise.resolve(access_token);
    }
    return Promise.resolve(null);
  },
};

/**
 * Fake JwtService for testing purposes.
 */
export const fakeJWTService: Partial<JwtService> = {
  /**
   * Mock implementation of the sign method.
   *
   * @param payload - The payload to be signed.
   * @returns A fake JWT token.
   */
  sign: (payload) => {
    return 'Fake.JWT.Token';
  },
};

/**
 * Fake UserRepository for testing purposes.
 */
export const fakeUserRepository: Partial<UserRepository> = {
  /**
   * Mock implementation of the findAllByName method.
   *
   * @param listOfNames - An array of names to search for.
   * @returns A Promise resolving to an empty array.
   */
  findAllByName: (listOfNames: string[]) => Promise.resolve([]),

  /**
   * Mock implementation of the save method.
   *
   * @param user - The user object to be saved.
   * @returns A Promise resolving to the saved user object.
   */
  save: jest.fn().mockImplementation((user: User) => Promise.resolve(user)),
};
