import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as bcrypt from 'bcrypt';

const configService = new ConfigService();

/**
 * Service responsible for encryption-related operations.
 */
@Injectable()
export class EncryptionService {
  /**
   * Hashes a password using bcrypt.
   *
   * @param pass - The password to be hashed.
   * @returns A Promise resolving to the hashed password.
   */
  async hashPassword(pass: string): Promise<string> {
    const hashedPassword = await bcrypt.hash(
      pass,
      parseInt(configService.get('BCRYPT_ROUNDS')),
    );
    return hashedPassword;
  }

  /**
   * Compares a password with a hashed password to check for a match.
   *
   * @param password - The password to be checked.
   * @param hashedPassword - The hashed password to compare against.
   * @returns A Promise resolving to `true` if the passwords match, otherwise `false`.
   */
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
