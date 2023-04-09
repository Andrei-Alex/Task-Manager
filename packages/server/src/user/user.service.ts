import { Injectable } from '@nestjs/common';
import { Repository, Like } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './User.entity';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private repo: Repository<User>) {}

  create(full_name: string, password: string, email: string) {
    const user = this.repo.create({ full_name, password, email });
    return user;
  }

  findByMail(email: string) {
    return this.repo.find({ where: { email: email } });
  }
  async findByName(name: string) {
    const user = await this.repo.findOne({
      where: { full_name: Like(`%${name}%`) },
    });
    console.log(user);
    const { password, ...rest } = user;
    return rest;
  }

  async findAll() {
    const users = await this.repo.find();

    const usersWithoutPassword = users.map((user) => {
      const obj = {};
      Object.entries(user).forEach(([key, val]) => {
        if (key !== 'password') obj[key] = val;
      });
      return obj;
    });
    return usersWithoutPassword;
  }

  findById(userId: number) {
    return this.repo.find({
      where: {
        id: userId,
      },
    });
  }
}
