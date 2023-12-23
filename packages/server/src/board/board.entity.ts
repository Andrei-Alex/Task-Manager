import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  Column,
  ManyToMany,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { User } from '../user/User.entity';
import { BoardColumn } from '../column/column.entity';
import { ApiProperty } from '@nestjs/swagger'; // make sure to install Swagger related package

/**
 * Board entity representing a project board
 */
@Entity()
export class Board {
  @ApiProperty({ description: 'The unique identifier for the board' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ description: 'Name of the board' })
  @Column()
  name: string;

  @ApiProperty({
    description: 'List of columns associated with the board',
    type: () => BoardColumn,
  })
  @OneToMany(() => BoardColumn, (boardColumn) => boardColumn.board)
  boardColumns: BoardColumn[];

  @ApiProperty({
    description: 'List of users who are members of the board',
    type: () => User,
  })
  @ManyToMany(() => User, (user) => user.boards)
  members: User[];

  @ApiProperty({
    description: 'The user who owns the board',
    type: () => User,
  })
  @ManyToOne(() => User, (user) => user.id)
  owner: User;

  @ApiProperty({ description: 'Creation date of the board' })
  @CreateDateColumn()
  date: Date;
}
