import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { EncryptionService } from './encryption.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private encryptionService: EncryptionService,
    private jwtService: JwtService,
  ) {}

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

  async login(user: any) {
    const payload = { email: user.email, sub: user.id };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
