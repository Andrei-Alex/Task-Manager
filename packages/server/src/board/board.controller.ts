import {
  Controller,
  Post,
  Body,
  Request,
  Get,
  Param,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { BoardService } from './board.service';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CreateBoardDto } from './dtos/create-board.dto';
import { Board } from './board.entity';
import { UserService } from '../user/user.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Controller()
export class BoardController {
  constructor(
    private boardService: BoardService,
    private userService: UserService,
    @InjectRepository(Board)
    private readonly userRepository: Repository<Board>,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Post('/board')
  async createBoard(@Request() req, @Body() createBoardDto: CreateBoardDto) {
    return await this.boardService.createBoard(req.user.userId, createBoardDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get('boards')
  getBoards(@Request() req) {
    return this.boardService.findAllIfMember(req.user.userId);
  }

  @UseGuards(JwtAuthGuard)
  @Get('board/:id')
  async getBoard(@Request() req, @Param('id') paramId) {
    const board = await this.boardService.findOne(paramId);
    if (board === null) {
      throw new HttpException('Nothing Found !', HttpStatus.NOT_FOUND);
    }
    let isMember = false;
    board.members.forEach((user) => {
      if (user.id === req.user.userId) {
        isMember = true;
      }
    });
    if (isMember === false) {
      throw new HttpException('Not your board !', HttpStatus.FORBIDDEN);
    }

    return board;
  }
}
