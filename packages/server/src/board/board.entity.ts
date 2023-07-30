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

@Entity()
export class Board {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => BoardColumn, (boardColumns) => boardColumns.board)
  boardColumns: BoardColumn[];

  @ManyToMany(() => User, (user) => user.boards)
  members: User[];

  @ManyToOne(() => User, (user) => user.id)
  owner: User;

  @CreateDateColumn()
  date: Date;
}
