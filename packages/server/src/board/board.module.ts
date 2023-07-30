import { Module } from '@nestjs/common';
import { BoardService } from './board.service';
import { BoardController } from './board.controller';
import { UserService } from '../user/user.service';
import { UserRepository } from '../user/user.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Board } from './board.entity';
import { User } from '../user/User.entity';
import { BoardColumn } from '../column/column.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Board, BoardColumn])],
  providers: [BoardService, UserService, UserRepository],
  controllers: [BoardController],
})
export class BoardModule {}
