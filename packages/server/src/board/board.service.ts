import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Board } from './board.entity';
import { User } from '../user/User.entity';
import { UserService } from '../user/user.service';
import { UserRepository } from '../user/user.repository';
import { CreateBoardDto } from './dtos/create-board.dto';
import { BoardColumn } from '../column/column.entity';

/**
 * Service responsible for handling board related operations
 */
@Injectable()
export class BoardService {
  constructor(
    private userService: UserService,
    @InjectRepository(Board) private repo: Repository<Board>,
    @InjectRepository(BoardColumn)
    private boardColumnRepo: Repository<BoardColumn>,
    private userRepo: UserRepository,
  ) {}

  /**
   * Creates a new board with the given details.
   * @param ownerId - The ID of the user creating the board
   * @param createBoardDto - Data transfer object containing the details for the new board
   * @returns The newly created board
   */
  async createBoard(
    ownerId: number,
    createBoardDto: CreateBoardDto,
  ): Promise<Board> {
    const board = new Board();
    const usersFound = await this.userService.findById(ownerId);
    const user: User = usersFound[0];
    const users = await this.userRepo.findAllByName(createBoardDto.members);
    board.name = createBoardDto.name;
    board.owner = user;
    board.members = users;

    const todo = this.boardColumnRepo.create({ name: 'Todo', order: 1 });
    await this.boardColumnRepo.save(todo);
    const inProgress = this.boardColumnRepo.create({
      name: 'In Progress',
      order: 2,
    });
    await this.boardColumnRepo.save(inProgress);
    const done = this.boardColumnRepo.create({
      name: 'Done', // Corrected the name 'In Progress' to 'Done'
      order: 3,
    });
    await this.boardColumnRepo.save(done);

    board.boardColumns = [todo, inProgress, done];
    await this.repo.save(board);

    return board;
  }

  /**
   * Retrieves all boards.
   * @returns An array of all boards
   */
  async findAll(): Promise<Board[]> {
    return this.repo.find();
  }

  /**
   * Retrieves all boards that a user is a member of.
   * @param currentUserId - The ID of the current user
   * @returns An array of boards the user is a member of
   */
  async findAllIfMember(currentUserId: number): Promise<Board[]> {
    const boards = await this.repo
      .createQueryBuilder('boards')
      .leftJoinAndSelect('boards.members', 'board_members')
      .where('boards.owner = :id OR board_members.id = :id', {
        id: currentUserId,
      })
      .orderBy('boards.id')
      .getMany();
    return boards;
  }

  /**
   * Retrieves a single board based on the provided ID.
   * @param paramId - The ID of the board to retrieve
   * @returns The board if found, or null
   */
  async findOne(paramId: number): Promise<Board | null> {
    const board = await this.repo
      .createQueryBuilder('boards')
      .leftJoinAndSelect('boards.members', 'board_members')
      .where('boards.id = :pid', {
        pid: paramId,
      })
      .leftJoinAndSelect('boards.boardColumns', 'column')
      .orderBy('boards.id')
      .getOne();

    return board;
  }
}
