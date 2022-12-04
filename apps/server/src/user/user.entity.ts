import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  full_name: string;
}
