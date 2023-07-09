import { Entity, PrimaryGeneratedColumn, Column, Index } from 'typeorm';
@Entity()
export class AppData {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  ServerVersion: string;
}
