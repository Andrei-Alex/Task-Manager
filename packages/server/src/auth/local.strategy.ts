import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { AuthService } from './auth.service';

/**
 * Local authentication strategy based on PassportStrategy.
 * This strategy is used to authenticate users using a local username and password.
 */
@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  /**
   * Custom method to validate a user's credentials.
   *
   * @param username - The username provided for authentication.
   * @param password - The password provided for authentication.
   * @returns A Promise resolving to the user object if valid, otherwise `null`.
   */
  async validate(username: string, password: string): Promise<any> {
    const user = await this.authService.validateUser(username, password);
    return user;
  }
}
