import { Module } from '@nestjs/common';
import { BoardService } from './board.service';
import { BoardController } from './board.controller';
import { UserService } from '../user/user.service';
import { UserRepository } from '../user/user.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Board } from './board.entity';
import { User } from '../user/User.entity';
import { BoardColumn } from '../column/column.entity';

/**
 * Module to group and provide board-related controllers, services and entities.
 * It imports necessary TypeORM features for User, Board, and BoardColumn entities.
 * It provides BoardService, UserService, and UserRepository to be used application-wide.
 */
@Module({
  imports: [TypeOrmModule.forFeature([User, Board, BoardColumn])], // Importing necessary entities
  providers: [BoardService, UserService, UserRepository], // Providing services and repository for dependency injection
  controllers: [BoardController], // Registering controller for handling board routes
})
export class BoardModule {}
