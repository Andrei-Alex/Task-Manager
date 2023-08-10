import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Reflector } from '@nestjs/core';
import { ExecutionContext } from '@nestjs/common';
import { IS_PUBLIC_KEY } from '../constants';

/**
 * JWT authentication guard based on AuthGuard from Passport.
 * This guard is used to protect routes that require a valid JWT token.
 */
@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  constructor(private reflector: Reflector) {
    super();
  }

  /**
   * Custom canActivate method to determine if the route is accessible.
   *
   * @param context - The execution context.
   * @returns `true` if the route is public or user is authenticated, otherwise `false`.
   */
  canActivate(context: ExecutionContext) {
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (isPublic) {
      return true;
    }
    const request = context.switchToHttp().getRequest();
    const user = request.user;
    return super.canActivate(context);
  }
}
