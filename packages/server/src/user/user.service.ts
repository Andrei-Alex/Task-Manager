import { Injectable, NotFoundException } from '@nestjs/common';
import { Like, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './User.entity';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private repo: Repository<User>) {}

  async create(full_name: string, password: string, email: string) {
    return this.repo.create({ full_name, password, email });
  }

  findByMail(email: string) {
    return this.repo.find({ where: { email: email } });
  }
  async findByName(name: string) {
    const user = await this.repo.findOne({
      where: { full_name: Like(`%${name}%`) },
    });
    const { password: password, ...rest } = user;
    return rest;
  }

  async findAll() {
    const users = await this.repo.find();

    return users.map((user) => {
      const obj = {};
      Object.entries(user).forEach(([key, val]) => {
        if (key !== 'password') obj[key] = val;
      });
      return obj;
    });
  }

  findById(userId: number) {
    return this.repo.find({
      where: {
        id: userId,
      },
    });
  }
  async deleteByMail(email: string) {
    const user = await this.repo.findOne({ where: { email } });
    if (!user) {
      throw new NotFoundException('User not found');
    }

    await this.repo.delete(user);
  }
}
