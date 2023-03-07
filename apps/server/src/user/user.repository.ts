import { DataSource, Repository, In } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { User } from './user.entity';

@Injectable()
export class UserRepository extends Repository<User> {
  constructor(private dataSource: DataSource) {
    super(User, dataSource.createEntityManager());
  }
  async findAllByName(listOfNames: string[]) {
    return this.findBy({
      full_name: In(listOfNames),
    });
  }
}
