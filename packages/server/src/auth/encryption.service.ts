import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as bcrypt from 'bcrypt';

const configService = new ConfigService();
@Injectable()
export class EncryptionService {
  async hashPassword(pass: string): Promise<string> {
    const hashedPassword = await bcrypt.hash(
      pass,
      parseInt(configService.get('BCRYPT_ROUNDS')),
    );
    return hashedPassword;
  }

  async decryptPassword(
    password: string,
    hashedPassword: string,
  ): Promise<boolean> {
    if (await bcrypt.compare(password, hashedPassword)) {
      return true;
    }
    return false;
  }
}
