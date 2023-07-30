import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  Column,
  ManyToMany,
  ManyToOne,
} from 'typeorm';
import { Board } from '../board/board.entity';

@Entity()
export class BoardColumn {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  order: number;

  @ManyToOne(() => Board, (board) => board.boardColumns, {
    onDelete: 'SET NULL',
  })
  board: Board;
}
