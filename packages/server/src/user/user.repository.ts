import { Repository, In } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { User } from './User.entity';

@Injectable()
export class UserRepository extends Repository<User> {
  /**
   * Find all users with names from a list of names.
   *
   * @param listOfNames - An array of full names to search for.
   * @returns Promise that resolves to an array of user entities matching the provided names.
   */
  async findAllByName(listOfNames: string[]): Promise<User[]> {
    return this.find({
      where: {
        full_name: In(listOfNames),
      },
    });
  }
}
