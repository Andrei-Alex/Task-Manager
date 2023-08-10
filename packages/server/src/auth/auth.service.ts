import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { EncryptionService } from './encryption.service';
import { User } from '../user/User.entity';

/**
 * Service responsible for authentication-related operations.
 */
@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private encryptionService: EncryptionService,
    private jwtService: JwtService,
  ) {}

  /**
   * Validate a user's credentials.
   *
   * @param email - The user's email.
   * @param password - The user's password.
   * @returns A Promise resolving to the user object if valid, otherwise null.
   */
  async validateUser(email: string, password: string) {
    const [user] = await this.userService.findByMail(email);
    if (
      user &&
      (await this.encryptionService.decryptPassword(
        password,
        user.password,
      )) === true
    ) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  /**
   * Generate an access token for a user.
   *
   * @param user - The user object.
   * @returns A Promise resolving to an object containing the access token.
   */
  async login(user: Partial<User>) {
    const payload = { email: user.email, sub: user.id };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
