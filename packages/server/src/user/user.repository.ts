import { DataSource, Repository, In } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { User } from './User.entity';

@Injectable()
export class UserRepository extends Repository<User> {
  async findAllByName(listOfNames: string[]) {
    return this.find({
      where: {
        full_name: In(listOfNames),
      },
    });
  }
}
