import { Injectable, NotFoundException } from '@nestjs/common';
import { Like, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './User.entity';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private repo: Repository<User>) {}

  /**
   * Create a new user.
   *
   * @param full_name - The full name of the user.
   * @param password - The password of the user.
   * @param email - The email address of the user.
   * @returns The created user entity.
   */
  async create(full_name: string, password: string, email: string) {
    return this.repo.create({ full_name, password, email });
  }

  /**
   * Find users by email.
   *
   * @param email - The email address to search for.
   * @returns User entities matching the email.
   */
  findByMail(email: string) {
    return this.repo.find({ where: { email: email } });
  }

  /**
   * Find users by name (using partial name match).
   *
   * @param name - The partial name to search for.
   * @returns User entities matching the partial name.
   */
  async findByName(name: string) {
    const user = await this.repo.findOne({
      where: { full_name: Like(`%${name}%`) },
    });
    const { password: password, ...rest } = user;
    return rest;
  }

  /**
   * Get all users, excluding the password field.
   *
   * @returns User entities without passwords.
   */
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

  /**
   * Find users by their ID.
   *
   * @param userId - The ID of the user.
   * @returns User entities matching the ID.
   */
  findById(userId: number) {
    return this.repo.find({
      where: {
        id: userId,
      },
    });
  }

  /**
   * Delete a user by email.
   *
   * @param email - The email address of the user to delete.
   * @throws NotFoundException if the user is not found.
   */
  async deleteByMail(email: string) {
    const user = await this.repo.findOne({ where: { email } });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    await this.repo.delete(user);
  }
}
