import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {
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
