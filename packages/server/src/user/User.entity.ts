import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Index,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Board } from '../board/board.entity';
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Index('name-idx')
  @Column()
  full_name: string;
  @Column()
  password: string;
  @Column({
    unique: true,
  })
  email: string;
  @ManyToMany(() => Board, (board) => board.members, {
    cascade: true,
  })
  @JoinTable()
  boards: Board[];
}
