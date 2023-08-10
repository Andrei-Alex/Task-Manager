import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

/**
 * Custom LocalAuthGuard extending the AuthGuard for local strategy.
 * This guard is used for authenticating users with username and password.
 */
@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {
  /**
   * Custom handler for handling authentication requests.
   *
   * @param err - The error object, if any.
   * @param user - The authenticated user object.
   * @param info - Additional authentication info, if available.
   * @returns The authenticated user or throws exceptions for certain cases.
   */
  handleRequest(err, user, info) {
    if (info?.message === 'Missing credentials') {
      throw new BadRequestException();
    }
    if (user === false) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
