import { Injectable } from '@nestjs/common';

/**
 * Service class for handling application-level functionality.
 */
@Injectable()
export class AppService {
  /**
   * Retrieve application data.
   * @returns An object containing a welcome message.
   */
  getData(): { message: string } {
    return { message: 'Welcome to the server!' };
  }
}
